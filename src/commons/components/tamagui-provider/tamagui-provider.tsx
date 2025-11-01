import {
  type TamaguiConfig,
  tamaguiConfig,
} from '@/commons/libs/tamagui/tamagui.config'
import type { ReactNode } from 'react'
import { TamaguiProvider as BaseTamaguiProvider } from 'tamagui'

export type TamaguiProviderProps = {
  children: ReactNode
  config?: TamaguiConfig
}

export function TamaguiProvider({
  children,
  config = tamaguiConfig,
}: TamaguiProviderProps) {
  return <BaseTamaguiProvider config={config}>{children}</BaseTamaguiProvider>
}
