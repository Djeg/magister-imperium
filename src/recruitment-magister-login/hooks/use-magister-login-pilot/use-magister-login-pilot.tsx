import type { Translatable } from '@/commons/libs/translations/translations'
import type { MagisterCredentials } from '@/recruitment-magister-login/schemas/magister-credentials-schema/magister-credentials-schema'
import { useObservable } from '@legendapp/state/react'
import { useMagisterLoginMutation } from '../use-magister-login-mutation/use-magister-login-mutation'

export type MagisterLoginPilotState = {
  errors: Translatable[]
}

export function useMagisterLoginPilot() {
  const magisterLoginMutation = useMagisterLoginMutation()
  const $ = useObservable<MagisterLoginPilotState>({
    errors: [],
  })

  const handleLogin = async (credentials: MagisterCredentials) => {
    $.errors.set([])

    try {
      await magisterLoginMutation.mutateAsync({ credentials })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_: unknown) {
      $.errors.set([
        {
          id: 'recruitment-magister-login.hooks.useMagisterLoginPilot.loginError',
        },
      ])
    }
  }

  return { $, handleLogin }
}
