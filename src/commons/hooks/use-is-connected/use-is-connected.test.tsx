import { authPilotMock } from '@/commons/components/auth-pilot-provider/__mocks__/auth-pilot-provider-mocks'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import { useIsConnected } from './use-is-connected'

describe('useIsConnected', () => {
  it('should return true if the user is connected', async () => {
    authPilotMock.login(
      magisterSchema.parse({
        id: '1',
        userId: '1',
        name: 'John Doe',
      }),
    )

    const { result } = await renderHookWithProviders(() => useIsConnected())

    expect(result.current).toBe(true)
  })

  it('should return false if the user is not connected', async () => {
    authPilotMock.logout()

    const { result } = await renderHookWithProviders(() => useIsConnected())

    expect(result.current).toBe(false)
  })
})
