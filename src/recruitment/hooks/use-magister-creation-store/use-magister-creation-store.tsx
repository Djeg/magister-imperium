import { t } from '@/commons/libs/translations/translations'
import { useSignUpMutation } from '@/recruitment/hooks/use-sign-up-mutation/use-sign-up-mutation'
import type { MagisterCreation } from '@/recruitment/schemas/magister-creation-schema/magister-creation-schema'
import { useObservable } from '@legendapp/state/react'

export type MagisterCreationState = {
  errors: string[]
}

export function useMagisterCreationStore() {
  const mutationSignUp = useSignUpMutation()
  const $ = useObservable<MagisterCreationState>({
    errors: [],
  })

  const createNewMagister = async (newMagister: MagisterCreation) => {
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
