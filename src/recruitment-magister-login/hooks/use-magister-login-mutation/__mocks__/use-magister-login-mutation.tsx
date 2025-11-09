import { magisterLoginMutationFnMock } from '@/recruitment-magister-login/hooks/use-magister-login-mutation/__mocks__/use-magister-login-mutation-mocks'

export function useMagisterLoginMutation() {
  return {
    mutateAsync: magisterLoginMutationFnMock,
  }
}
