import { MagisterLoginPage } from '@/recruitment-magister-login/components/magister-login-page/magister-login-page'
import { useMagisterLoginStore } from '@/recruitment-magister-login/hooks/use-magister-login-store/use-magister-login-store'

export function MagisterLoginScreen() {
  const [$, { login }] = useMagisterLoginStore()

  return <MagisterLoginPage onSubmit={login} $errors={$.errors} />
}
