import { t } from '@/commons/libs/translations/translations'
import { useMagisterLoginMutation } from '@/recruitment/hooks/use-magister-login-mutation/use-magister-login-mutation'
import type { MagisterCredentials } from '@/recruitment/schemas/magister-credentials-schema/magister-credentials-schema'
import { useObservable } from '@legendapp/state/react'

export type MagisterLoginState = {
  errors: string[]
}

export function useMagisterLoginStore() {
  const mutationMagisterLogin = useMagisterLoginMutation()
  const $ = useObservable<MagisterLoginState>({
    errors: [],
  })

  const login = async (credentials: MagisterCredentials) => {
    $.errors.set([])

    try {
      await mutationMagisterLogin.mutateAsync({ credentials })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_: unknown) {
      $.errors.set([t('recruitment.useMagisterLoginStore.errors.login')])
    }
  }

  return [$, { login }] as const
}
