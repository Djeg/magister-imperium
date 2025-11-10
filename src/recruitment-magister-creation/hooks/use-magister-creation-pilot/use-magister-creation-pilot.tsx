import { useAuth } from '@/commons/hooks/use-auth/use-auth'
import type { MagisterCreationState } from '@/recruitment-magister-creation/components/magister-creation-screen/magister-creation-screen'
import { useCreateMagisterMutation } from '@/recruitment-magister-creation/hooks/use-create-magister-mutation/use-create-magister-mutation'
import type { NewMagister } from '@/recruitment-magister-creation/schemas/new-magister-schema/new-magister-schema'
import { useObservable } from '@legendapp/state/react'

export function useMagisterCreationPilot() {
  const auth = useAuth()
  const $ = useObservable<MagisterCreationState>({
    errors: [],
  })

  const mutationSignUp = useCreateMagisterMutation({
    onSuccess: magister => {
      auth.login(magister)
    },
  })

  const handleSignature = async (newMagister: NewMagister) => {
    $.errors.set([])

    try {
      await mutationSignUp.mutateAsync({ newMagister })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_: unknown) {
      $.errors.set([
        {
          id: 'recruitment-magister-creation.components.MagisterCreationScreen.signatureError',
          values: {},
        },
      ])
    }
  }

  return { $, handleSignature }
}
