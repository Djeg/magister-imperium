import { useAuthSubscription } from '@/commons/hooks/use-auth-subscription/use-auth-subscription'
import type { Failure } from '@/commons/libs/failure/failure'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'
import { opaqueObject } from '@legendapp/state'
import { useObservable } from '@legendapp/state/react'

export type AuthState = {
  lastFailure?: Failure
  magister?: Magister
}

export function useAuthPilot() {
  const $ = useObservable<AuthState>({
    magister: undefined,
    lastFailure: undefined,
  })

  const login = (magister: Magister) => {
    $.magister.set(magister)
    $.lastFailure.set(undefined)
  }

  const logout = () => {
    $.magister.set(undefined)
    $.lastFailure.set(undefined)
  }

  const fail = (failure: Failure) => {
    $.lastFailure.set(opaqueObject(failure))
  }

  useAuthSubscription({
    onLogin: login,
    onFailure: fail,
    onLogout: logout,
  })

  return { $, login, logout, fail }
}

export type AuthPilot = ReturnType<typeof useAuthPilot>
