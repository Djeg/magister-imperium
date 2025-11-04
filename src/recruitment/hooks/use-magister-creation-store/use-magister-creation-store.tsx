import { t } from '@/commons/libs/translations/translations'
import { useCreateMagisterMutation } from '@/recruitment/mutations/create-magister-mutation/use-create-magister-mutation'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import { useObservable } from '@legendapp/state/react'

export type MagisterCreationState = {
  errors: string[]
}

export function useMagisterCreationStore() {
  const mutationSignUp = useCreateMagisterMutation()
  const $ = useObservable<MagisterCreationState>({
    errors: [],
  })

  const createNewMagister = async (newMagister: NewMagister) => {
    $.errors.set([])

    try {
      await mutationSignUp.mutateAsync({ newMagister })
    } catch (_: unknown) {
      console.error(_)
      $.errors.set([t('recruitment.useMagisterCreationStore.errors.signUp')])
    }
  }

  return [$, { createNewMagister }] as const
}
