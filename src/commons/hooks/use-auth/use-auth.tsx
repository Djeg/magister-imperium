import { AuthPilotContext } from '@/commons/components/auth-pilot-provider/auth-pilot-provider'
import { AuthPilotProviderFailure } from '@/commons/failures/auth-pilot-provider-failure'
import { useContext } from 'react'

export function useAuth() {
  const authPilot = useContext(AuthPilotContext)

  if (!authPilot) {
    throw new AuthPilotProviderFailure(`
      Auth pilot not found in the context

      Here are some clues about what might be causing this:

      - You are missing a <AuthPilotProvider> component in the tree
      - You are not inside a <AuthPilotProvider> component
      - You are not using the useAuth hook inside a component that is a child of a <AuthPilotProvider> component
    `)
  }

  return authPilot
}
