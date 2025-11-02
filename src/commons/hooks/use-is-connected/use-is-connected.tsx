import { MagisterContext } from '@/commons/components/magister-provider/magister-provider'
import { useContext } from 'react'

export function useIsConnected() {
  return !!useContext(MagisterContext)
}
