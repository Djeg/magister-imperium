import { authPilotMock } from '@/commons/components/auth-pilot-provider/__mocks__/auth-pilot-provider-mocks'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import { createMagisterMutationFnMock } from '@/recruitment-magister-creation/hooks/use-create-magister-mutation/__mocks__/use-create-magister-mutation-mocks'
import { newMagisterMock } from '@/recruitment-magister-creation/schemas/new-magister-schema/__mocks__/new-magister-schema-mocks'
import { useMagisterCreationPilot } from './use-magister-creation-pilot'

jest.mock(
  '@/recruitment-magister-creation/hooks/use-create-magister-mutation/use-create-magister-mutation',
)

describe('useMagisterCreationPilot', () => {
  it('should create and login a new magister', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterCreationPilot(),
    )

    expect(result.current.$.errors.get()).toEqual([])

    await result.current.handleSignature(newMagisterMock)

    expect(result.current.$.errors.get()).toEqual([])

    expect(authPilotMock.login).toHaveBeenNthCalledWith(
      1,
      magisterSchema.parse({
        id: '123',
        userId: '123',
        name: 'Test Magister',
      }),
    )
  })

  it('should reset the errors when handling the signature', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterCreationPilot(),
    )

    result.current.$.errors.set([
      { id: 'commons.GlobalErrorFallback.title', values: {} },
    ])

    await result.current.handleSignature(newMagisterMock)

    expect(result.current.$.errors.get()).toEqual([])
  })

  it('should fill the errors when the signature fails', async () => {
    const { result } = await renderHookWithProviders(() =>
      useMagisterCreationPilot(),
    )

    createMagisterMutationFnMock.mockRejectedValueOnce(
      new Error('Failed to sign up'),
    )

    await result.current.handleSignature(newMagisterMock)

    expect(result.current.$.errors.get()).toEqual([
      {
        id: 'recruitment-magister-creation.components.MagisterCreationScreen.signatureError',
        values: {},
      },
    ])
  })
})
