import { useObservable } from '@legendapp/state/react'

export type MagisterCreationState = {
  errors: string[]
}

export function useMagisterCreationState() {
  return useObservable<MagisterCreationState>({
    errors: [],
  })
}
