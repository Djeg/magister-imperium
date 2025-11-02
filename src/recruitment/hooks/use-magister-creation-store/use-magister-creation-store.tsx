import { t } from '@/commons/libs/translations/translations'
import type { MagisterCreation } from '@/recruitment/schemas/magister-creation-schema/magister-creation-schema'
import { useObservable } from '@legendapp/state/react'
import { useSignUpMutation } from '../use-sign-up-mutation/use-sign-up-mutation'

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
