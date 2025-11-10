import { authPilotMock } from '@/commons/components/auth-pilot-provider/__mocks__/auth-pilot-provider-mocks'
import { AuthPilotProviderFailure } from '@/commons/failures/auth-pilot-provider-failure'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import { useMagister } from './use-magister'

describe('useMagister', () => {
  it('should return the magister', async () => {
    const magister = magisterSchema.parse({
      id: '1',
      userId: '1',
      name: 'John Doe',
    })

    authPilotMock.login(magister)

    const { result } = await renderHookWithProviders(() => useMagister())

    expect(result.current).toEqual(magister)
  })

  it('should throw an error if the magister is not connected', async () => {
    authPilotMock.logout()

    await expect(renderHookWithProviders(() => useMagister())).rejects.toThrow(
      AuthPilotProviderFailure,
    )
  })
})
