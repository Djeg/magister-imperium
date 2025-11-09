import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import type { TranslationKey } from '@/commons/libs/translations/translations'
import { magisterCredentialsMock } from '@/recruitment-magister-login/schemas/magister-credentials-schema/__mocks__/magister-credentials-schema-mocks'
import { magisterLoginMutationFnMock } from '../use-magister-login-mutation/__mocks__/use-magister-login-mutation-mocks'
import { useMagisterLoginPilot } from './use-magister-login-pilot'

jest.mock(
  '@/recruitment-magister-login/hooks/use-magister-login-mutation/use-magister-login-mutation',
)

describe('useMagisterLoginPilot', () => {
  it('should login the magister', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterLoginPilot(),
    )

    await result.current.handleLogin(magisterCredentialsMock)

    expect(result.current.$.errors.get()).toEqual([])
    expect(magisterLoginMutationFnMock).toHaveBeenCalledWith({
      credentials: magisterCredentialsMock,
    })
  })

  it('should reset the errors state when triggering the login', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterLoginPilot(),
    )

    result.current.$.errors.set([{ id: 'error' as TranslationKey }])

    expect(result.current.$.errors.get()).toEqual([{ id: 'error' }])

    await result.current.handleLogin(magisterCredentialsMock)

    expect(result.current.$.errors.get()).toEqual([])
  })

  it('should set the errors state when the login fails', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterLoginPilot(),
    )

    magisterLoginMutationFnMock.mockRejectedValueOnce(
      new Error('Failed to login'),
    )

    await result.current.handleLogin(magisterCredentialsMock)

    expect(result.current.$.errors.get()).toEqual([
      {
        id: 'recruitment-magister-login.hooks.useMagisterLoginPilot.loginError',
      },
    ])
  })
})
