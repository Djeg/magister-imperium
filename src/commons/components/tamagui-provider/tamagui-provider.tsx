import config from '@/commons/libs/tamagui/tamagui.config'
import type { ReactNode } from 'react'
import { TamaguiProvider as BaseTamaguiProvider } from 'tamagui'

export type TamaguiProviderProps = {
  children: ReactNode
}

export function TamaguiProvider({ children }: TamaguiProviderProps) {
  return <BaseTamaguiProvider config={config}>{children}</BaseTamaguiProvider>
}
