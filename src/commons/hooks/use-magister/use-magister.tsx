import { MagisterContext } from '@/commons/components/magister-provider/magister-provider'
import { useContext } from 'react'

export function useMagister() {
  const magister = useContext(MagisterContext)

  if (!magister) {
    throw new Error(`
      Magister is null.

      Here are some clues to help you fix this:
      - Please make sure you are inside a <MagisterProvider> component.
      - Please make sure you are not using the useMagister hook outside of a <MagisterProvider> component.
      - Please make sure you are logged in.
    `)
  }

  return magister
}
