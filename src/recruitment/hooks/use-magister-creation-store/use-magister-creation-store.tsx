import { t } from '@/commons/libs/translations/translations'
import { useCreateMagisterMutation } from '@/recruitment/hooks/use-create-magister-mutation/use-create-magister-mutation'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import { useObservable } from '@legendapp/state/react'

export type MagisterCreationState = {
  errors: string[]
}

export function useMagisterCreationStore() {
  const mutationSignUp = useCreateMagisterMutation({
    onSuccess: magister => {
      console.warn(
        `Next feature ${magister.name} is coming soon ... stay tuned!`,
      )
    },
  })

  const $ = useObservable<MagisterCreationState>({
    errors: [],
  })

  const createNewMagister = async (newMagister: NewMagister) => {
    $.errors.set([])

    try {
      await mutationSignUp.mutateAsync({ newMagister })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_: unknown) {
      $.errors.set([t('recruitment.useMagisterCreationStore.errors.signUp')])
    }
  }

  return [$, { createNewMagister }] as const
}
