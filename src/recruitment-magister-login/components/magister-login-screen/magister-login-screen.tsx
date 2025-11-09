import { MagisterLoginPage } from '@/recruitment-magister-login/components/magister-login-page/magister-login-page'
import { useMagisterLoginPilot } from '@/recruitment-magister-login/hooks/use-magister-login-pilot/use-magister-login-pilot'

export function MagisterLoginScreen() {
  const { $, handleLogin } = useMagisterLoginPilot()

  return <MagisterLoginPage onSubmit={handleLogin} $errors={$.errors} />
}
