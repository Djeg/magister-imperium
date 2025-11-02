import { t } from '@/commons/libs/translations/translations'
import { useMutationMagisterLogin } from '@/recruitment/hooks/use-mutation-magister-login/use-mutation-magister-login'
import type { MagisterCredentials } from '@/recruitment/schemas/magister-credentials-schema/magister-credentials-schema'
import { useObservable } from '@legendapp/state/react'

export type MagisterLoginState = {
  errors: string[]
}

export function useMagisterLoginStore() {
  const mutationMagisterLogin = useMutationMagisterLogin()
  const $ = useObservable<MagisterLoginState>({
    errors: [],
  })

  const login = async (credentials: MagisterCredentials) => {
    $.errors.set([])

    try {
      await mutationMagisterLogin.mutateAsync({ credentials })
    } catch (_: unknown) {
      $.errors.set([t('recruitment.useMagisterLoginStore.errors.login')])
    }
  }

  return [$, { login }] as const
}
