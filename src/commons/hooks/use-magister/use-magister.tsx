import { AuthPilotProviderFailure } from '@/commons/failures/auth-pilot-provider-failure'
import { failure } from '@/commons/libs/failure/failure'
import { useSelector } from '@legendapp/state/react'
import { useAuth } from '../use-auth/use-auth'

export function useMagister() {
  const authPilot = useAuth()
  const magister = useSelector(() => authPilot.$.magister.get())

  if (!magister) {
    failure(
      AuthPilotProviderFailure,
      `
      There is no magister connected to the auth pilot

      Here are some clues about what might be causing this:
      - You are not logged in
      - You might want to use the useAuth hook to check if you are logged in
    `,
    )
  }

  return magister
}
