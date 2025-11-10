import * as UseAuthSubscriptionModule from '@/commons/hooks/use-auth-subscription/use-auth-subscription'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import { useAuthPilot } from './use-auth-pilot'

describe('useAuthPilot', () => {
  it('should contains the auth state', async () => {
    const { result } = await renderHookWithProviders(() => useAuthPilot())

    expect(result.current.$.magister.get()).toBeUndefined()
    expect(result.current.$.lastFailure.get()).toBeUndefined()
  })

  it('should subscribe to the auth state change', async () => {
    const useAuthSubscriptionSpy = jest.spyOn(
      UseAuthSubscriptionModule,
      'useAuthSubscription',
    )

    const { result } = await renderHookWithProviders(() => useAuthPilot())

    expect(useAuthSubscriptionSpy).toHaveBeenNthCalledWith(1, {
      onLogin: result.current.login,
      onFailure: result.current.fail,
      onLogout: result.current.logout,
    })
  })

  it('should login the magister when the user is signed in', async () => {
    const { result } = await renderHookWithProviders(() => useAuthPilot())

    result.current.login(
      magisterSchema.parse({
        id: '1',
        userId: '1',
        name: 'John Doe',
      }),
    )

    expect(result.current.$.magister.get()).toEqual({
      id: '1',
      userId: '1',
      name: 'John Doe',
    })
  })

  it('should logout the magister when the user is signed out', async () => {
    const magister = magisterSchema.parse({
      id: '1',
      userId: '1',
      name: 'John Doe',
    })

    const { result } = await renderHookWithProviders(() => useAuthPilot())

    result.current.login(magister)

    expect(result.current.$.magister.get()).toEqual(magister)

    result.current.logout()

    expect(result.current.$.magister.get()).toBeUndefined()
  })

  it('should be able to collect the last failure', async () => {
    const { result } = await renderHookWithProviders(() => useAuthPilot())

    result.current.fail(new Error('Failed to login'))

    expect(result.current.$.lastFailure.get()).toEqual(
      new Error('Failed to login'),
    )
  })
})
