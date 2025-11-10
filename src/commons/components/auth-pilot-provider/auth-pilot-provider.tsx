import {
  type AuthPilot,
  useAuthPilot,
} from '@/commons/hooks/use-auth-pilot/use-auth-pilot'
import { createContext, type ReactNode } from 'react'

export const AuthPilotContext = createContext<AuthPilot | undefined>(undefined)

export type AuthPilotProviderProps = {
  children: ReactNode
}

export function AuthPilotProvider({ children }: AuthPilotProviderProps) {
  const authPilot = useAuthPilot()

  return (
    <AuthPilotContext.Provider value={authPilot}>
      {children}
    </AuthPilotContext.Provider>
  )
}
