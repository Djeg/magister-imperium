import { useAuth } from '@/commons/hooks/use-auth/use-auth'
import { useSelector } from '@legendapp/state/react'

export function useIsConnected() {
  const authPilot = useAuth()
  const isConnected = useSelector(
    () => authPilot.$.magister.get() !== undefined,
  )

  return isConnected
}
