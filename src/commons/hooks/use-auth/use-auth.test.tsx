import { AuthPilotProviderFailure } from '@/commons/failures/auth-pilot-provider-failure'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { renderHook } from '@testing-library/react-native'
import { useAuth } from './use-auth'

describe('useAuth', () => {
  it('should throw an error if the auth pilot is not found in the context', async () => {
    expect(() => renderHook(() => useAuth())).toThrow(AuthPilotProviderFailure)
  })

  it('should return the auth pilot', async () => {
    const { result } = await renderHookWithProviders(() => useAuth())

    expect(result.current).toBeDefined()
  })
})
