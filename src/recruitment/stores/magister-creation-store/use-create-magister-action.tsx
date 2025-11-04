import { t } from '@/commons/libs/translations/translations'
import { useCreateMagisterMutation } from '@/recruitment/mutations/create-magister-mutation/use-create-magister-mutation'
import type { NewMagisterInput } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import type { MagisterCreationState } from '@/recruitment/stores/magister-creation-store/use-magister-creation-state'
import type { Observable } from '@legendapp/state'

export function useCreateMagisterAction($: Observable<MagisterCreationState>) {
  const mutationSignUp = useCreateMagisterMutation()

  return async (newMagister: NewMagisterInput) => {
    $.errors.set([])

    try {
      await mutationSignUp.mutateAsync({ newMagister })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_: unknown) {
      $.errors.set([t('recruitment.useMagisterCreationStore.errors.signUp')])
    }
  }
}
