import {
  $magisterLoginMock,
  handleLoginMock,
} from '@/recruitment-magister-login/hooks/use-magister-login-pilot/__mocks__/use-magister-login-pilot-mocks'

export function useMagisterLoginPilot() {
  return {
    $: $magisterLoginMock,
    handleLogin: handleLoginMock,
  }
}
