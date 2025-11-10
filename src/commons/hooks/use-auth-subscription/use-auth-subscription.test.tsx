import { AuthSubscriptionFailure } from '@/commons/failures/auth-subscription-failure'
import {
  supabaseAuthMock,
  supabaseAuthStateChangeMock,
  supabaseDataMock,
} from '@/commons/libs/supabase/__mocks__/supabase.mocks'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { waitFor } from '@testing-library/react-native'
import { useAuthSubscription } from './use-auth-subscription'

describe('useAuthSubscription', () => {
  it('should subscribe to the auth state change', async () => {
    await renderHookWithProviders(() =>
      useAuthSubscription({
        onLogin: jest.fn(),
        onFailure: jest.fn(),
        onLogout: jest.fn(),
      }),
    )

    expect(supabaseAuthMock.onAuthStateChange).toHaveBeenNthCalledWith(
      1,
      expect.any(Function),
    )
  })

  it('should fetch the magister and call the onLogin function when the user is signed in', async () => {
    const onLoginMock = jest.fn()

    supabaseDataMock.set({
      error: null,
      data: {
        id: '123',
        name: 'Test Magister',
        user_id: '123',
      },
    })

    await renderHookWithProviders(() =>
      useAuthSubscription({
        onLogin: onLoginMock,
        onFailure: jest.fn(),
        onLogout: jest.fn(),
      }),
    )

    supabaseAuthStateChangeMock.fire('SIGNED_IN', {
      user: {
        id: '123',
      },
    })

    await waitFor(() => {
      expect(onLoginMock).toHaveBeenCalledWith({
        id: '123',
        name: 'Test Magister',
        userId: '123',
      })
    })
  })

  it('should call the onFailure function if the magister is not found during SIGNED_IN event', async () => {
    const onLoginMock = jest.fn()
    const onFailureMock = jest.fn()

    supabaseDataMock.set({
      error: new Error('Failed to query the magister'),
      data: null,
    })

    await renderHookWithProviders(() =>
      useAuthSubscription({
        onLogin: onLoginMock,
        onFailure: onFailureMock,
        onLogout: jest.fn(),
      }),
    )

    supabaseAuthStateChangeMock.fire('SIGNED_IN', {
      user: {
        id: '123',
      },
    })

    await waitFor(() => {
      expect(onFailureMock).toHaveBeenCalledWith(
        expect.any(AuthSubscriptionFailure),
      )
    })

    expect(onLoginMock).not.toHaveBeenCalled()
  })

  it('should call the onLogout function when the user is signed out', async () => {
    const onLogoutMock = jest.fn()

    await renderHookWithProviders(() =>
      useAuthSubscription({
        onLogin: jest.fn(),
        onFailure: jest.fn(),
        onLogout: onLogoutMock,
      }),
    )

    supabaseAuthStateChangeMock.fire('SIGNED_OUT', {
      user: {
        id: '123',
      },
    })

    await waitFor(() => {
      expect(onLogoutMock).toHaveBeenNthCalledWith(1)
    })
  })

  it('should do nothing otherwise', async () => {
    const onLoginMock = jest.fn()
    const onFailureMock = jest.fn()
    const onLogoutMock = jest.fn()

    await renderHookWithProviders(() =>
      useAuthSubscription({
        onLogin: onLoginMock,
        onFailure: onFailureMock,
        onLogout: onLogoutMock,
      }),
    )

    supabaseAuthStateChangeMock.fire('INITIAL_SESSION', {
      user: {
        id: '123',
      },
    })

    await waitFor(() => {
      expect(onLoginMock).not.toHaveBeenCalled()
      expect(onFailureMock).not.toHaveBeenCalled()
      expect(onLogoutMock).not.toHaveBeenCalled()
    })
  })
})
