import type { AuthPilot } from '@/commons/hooks/use-auth-pilot/use-auth-pilot'
import { createContext, type PropsWithChildren } from 'react'
import { authPilotMock } from './auth-pilot-provider-mocks'

export const AuthPilotContext = createContext<AuthPilot | undefined>(undefined)

export function AuthPilotProvider({ children }: PropsWithChildren) {
  return (
    <AuthPilotContext.Provider value={authPilotMock}>
      {children}
    </AuthPilotContext.Provider>
  )
}
