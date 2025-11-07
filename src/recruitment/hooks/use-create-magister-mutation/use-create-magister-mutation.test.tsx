import {
  supabaseAuthMock,
  supabaseDataMock,
  supabaseFromMock,
  supabaseQueryBuilderMock,
} from '@/commons/libs/supabase/__mocks__/supabase-mocks'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import {
  MagisterMutationFailToInsertFailure,
  MagisterMutationFailToParseDataFailure,
  MagisterMutationFailToSignUpFailure,
  useCreateMagisterMutation,
} from './use-create-magister-mutation'

jest.mock('@/commons/libs/supabase/supabase')

describe('useCreateMagisterMutation', () => {
  it('should create a new magister', async () => {
    const onSuccess = jest.fn().mockReturnValue(undefined)

    supabaseDataMock.set({
      error: null,
      data: {
        id: '123',
        name: 'Test Magister',
        user_id: '123',
      },
    })

    const { result } = renderHookWithProviders(() =>
      useCreateMagisterMutation({ onSuccess }),
    )

    const data = await result.current.mutateAsync({
      newMagister: {
        email: 'test@mail.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
        name: 'Test Magister',
      },
    })

    expect(data).toMatchInlineSnapshot(`
{
  "id": "123",
  "name": "Test Magister",
  "userId": "123",
}
`)

    expect(onSuccess).toHaveBeenCalledWith(data)

    expect(supabaseAuthMock.signUp).toHaveBeenCalledWith({
      email: 'test@mail.com',
      password: 'Password123!',
    })

    expect(supabaseFromMock).toHaveBeenCalledWith('magisters')
    expect(supabaseQueryBuilderMock.insert).toHaveBeenCalledWith({
      name: 'Test Magister',
      user_id: '123',
    })
    expect(supabaseQueryBuilderMock.select).toHaveBeenCalledWith(
      'id, name, user_id',
    )
    expect(supabaseQueryBuilderMock.single).toHaveBeenCalled()
  })

  it('should fail when the user cannot be signed up', async () => {
    const onSuccess = jest.fn().mockReturnValue(undefined)

    supabaseAuthMock.signUp.mockResolvedValueOnce({
      data: { user: null },
      error: new Error('Failed to sign up'),
    })

    const { result } = renderHookWithProviders(() =>
      useCreateMagisterMutation({ onSuccess }),
    )

    await expect(
      result.current.mutateAsync({
        newMagister: {
          email: 'test@mail.com',
          password: 'Password123!',
          confirmPassword: 'Password123!',
          name: 'Test Magister',
        },
      }),
    ).rejects.toThrow(MagisterMutationFailToSignUpFailure)

    expect(onSuccess).not.toHaveBeenCalled()
  })

  it('should fail when the magister cannot be inserted', async () => {
    const onSuccess = jest.fn().mockReturnValue(undefined)

    supabaseDataMock.set({
      error: new Error('Failed to insert the magister'),
      data: null,
    })

    const { result } = renderHookWithProviders(() =>
      useCreateMagisterMutation({ onSuccess }),
    )

    await expect(
      result.current.mutateAsync({
        newMagister: {
          email: 'test@mail.com',
          password: 'Password123!',
          confirmPassword: 'Password123!',
          name: 'Test Magister',
        },
      }),
    ).rejects.toThrow(MagisterMutationFailToInsertFailure)

    expect(onSuccess).not.toHaveBeenCalled()
  })

  it('should also fail when data resolved is not valid', async () => {
    const onSuccess = jest.fn().mockReturnValue(undefined)

    supabaseDataMock.set({
      error: null,
      data: { invalid: 'data' },
    })

    const { result } = renderHookWithProviders(() =>
      useCreateMagisterMutation({ onSuccess }),
    )

    await expect(
      result.current.mutateAsync({
        newMagister: {
          email: 'test@mail.com',
          password: 'Password123!',
          confirmPassword: 'Password123!',
          name: 'Test Magister',
        },
      }),
    ).rejects.toThrow(MagisterMutationFailToParseDataFailure)
  })
})
