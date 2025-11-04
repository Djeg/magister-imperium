import { useAuthQuery } from '@/commons/hooks/use-auth-query/use-auth-query'
import { useAuthSubscription } from '@/commons/hooks/use-auth-subscription/use-auth-subscription'
import { type Failure, failure } from '@/commons/libs/failure/failure'
import type { Action } from '@/commons/libs/react/react.action'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'
import { type Observable, observable, opaqueObject } from '@legendapp/state'
import { useObservable, useSelector } from '@legendapp/state/react'
import { type RelativePathString, router } from 'expo-router'
import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useContext,
  useEffect,
} from 'react'

export type AuthState = {
  authenticated: boolean
  magister?: Magister
  postAuthenticationRoute?: RelativePathString
  failure?: Failure
}

export type AuthActions = {
  authenticate: Action<Magister>
  unauthenticate: Action<void>
  setPostAuthenticationRoute: Action<RelativePathString>
  setFailure: Action<Failure>
}

export const initialAuth: AuthState = {
  authenticated: false,
}

export const AuthStateContext = createContext<Observable<AuthState>>(
  observable(initialAuth),
)

export const AuthActionsContext = createContext<AuthActions>({
  authenticate: () => {},
  unauthenticate: () => {},
  setPostAuthenticationRoute: () => {},
  setFailure: () => {},
})

export type AuthProviderProps = {
  auth?: AuthState
  children: ReactNode
}

export function AuthProvider({
  auth = initialAuth,
  children,
}: AuthProviderProps) {
  const $auth = useObservable(auth)

  const authenticate = (magister: Magister) => {
    $auth.set({
      authenticated: true,
      magister,
    })

    const postAuthenticationRoute = $auth.postAuthenticationRoute.peek()

    if (postAuthenticationRoute) {
      router.push(postAuthenticationRoute)
    }
  }

  const unauthenticate = () => {
    $auth.set({
      authenticated: false,
      magister: undefined,
    })
  }

  const setPostAuthenticationRoute = (route: RelativePathString) => {
    $auth.postAuthenticationRoute.set(route)
  }

  const setFailure = (failure: Failure) => {
    $auth.failure.set(opaqueObject(failure))
  }

  useAuthSubscription({
    onLogin: authenticate,
    onLogout: unauthenticate,
  })

  return (
    <AuthStateContext.Provider value={$auth}>
      <AuthActionsContext.Provider
        value={{
          authenticate,
          unauthenticate,
          setPostAuthenticationRoute,
          setFailure,
        }}
      >
        <ConditionalAuth>{children}</ConditionalAuth>
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  )
}

export type ConditionalAuthProps = PropsWithChildren

function ConditionalAuth({ children }: PropsWithChildren) {
  const $auth = useContext(AuthStateContext)
  const authenticated = useSelector(() => $auth.authenticated.get())

  return authenticated ? children : <AuthQuery>{children}</AuthQuery>
}

function AuthQuery({ children }: PropsWithChildren) {
  const { authenticate, setFailure } = useContext(AuthActionsContext)
  const { data: auth } = useAuthQuery()

  useEffect(() => {
    if (!auth) return

    if (auth.failure) {
      setFailure(auth.failure)
    }

    if (!auth.magister) return

    authenticate(auth.magister)
  }, [auth, authenticate, setFailure])

  return children
}

export class AuthProviderFailure extends failure.named(
  'commons/components/auth-provider',
) {}

export function useAuthActions() {
  const actions = useContext(AuthActionsContext)

  if (!actions) {
    failure(
      AuthProviderFailure,
      `
      Auth actions context not found in the tree.

      Here are some clues to help you:
      - Your are missing a <AuthProvider> component in your tree.
      - Your are using the useAuthActions hook outside of a <AuthProvider> component.
    `,
    )
  }

  return actions
}
