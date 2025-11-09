import {
  supabaseAuthMock,
  supabaseUserMock,
} from '@/commons/libs/supabase/__mocks__/supabase.mocks'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { magisterCredentialsMock } from '@/recruitment-magister-login/schemas/magister-credentials-schema/__mocks__/magister-credentials-schema-mocks'
import {
  MagisterLoginMutationSignInFailure,
  useMagisterLoginMutation,
} from './use-magister-login-mutation'

describe('useMagisterLoginMutation', () => {
  it('should sign in the magister', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterLoginMutation(),
    )

    const data = await result.current.mutateAsync({
      credentials: magisterCredentialsMock,
    })

    expect(data).toBe(supabaseUserMock.id)
  })

  it('should fail when the credentials are invalid', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterLoginMutation(),
    )

    supabaseAuthMock.signInWithPassword.mockResolvedValueOnce({
      data: { user: null },
      error: new Error('Failed to sign in'),
    })

    await expect(
      result.current.mutateAsync({
        credentials: magisterCredentialsMock,
      }),
    ).rejects.toThrow(MagisterLoginMutationSignInFailure)
  })
})
