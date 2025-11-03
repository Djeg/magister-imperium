import { useAuthQuery } from '@/commons/hooks/use-auth-query/use-auth-query'
import { useAuthSubscription } from '@/commons/hooks/use-auth-subscription/use-auth-subscription'
import type { Action } from '@/commons/libs/react/react.action'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'
import { type Observable, observable } from '@legendapp/state'
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
}

export type AuthActions = {
  authenticate: Action<Magister>
  unauthenticate: Action<void>
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

    if ($auth.postAuthenticationRoute) {
      router.push($auth.postAuthenticationRoute.peek())
    }
  }

  const unauthenticate = () => {
    $auth.set({
      authenticated: false,
      magister: undefined,
    })
  }

  useAuthSubscription({
    onLogin: authenticate,
    onLogout: unauthenticate,
  })

  return (
    <AuthStateContext.Provider value={$auth}>
      <AuthActionsContext.Provider value={{ authenticate, unauthenticate }}>
        <ConditionalAuth>{children}</ConditionalAuth>
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  )
}

export type ConditionalAuthProps = PropsWithChildren<{}>

function ConditionalAuth({ children }: PropsWithChildren) {
  const $auth = useContext(AuthStateContext)
  const authenticated = useSelector(() => $auth.authenticated.get())

  return authenticated ? children : <AuthQuery>{children}</AuthQuery>
}

function AuthQuery({ children }: PropsWithChildren) {
  const { authenticate } = useContext(AuthActionsContext)
  const { data: auth } = useAuthQuery()

  useEffect(() => {
    if (!auth || !auth.magister) return

    authenticate(auth.magister)
  }, [auth, authenticate])

  return children
}
