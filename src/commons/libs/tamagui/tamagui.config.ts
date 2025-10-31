import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'

export function createTamaguiConfig() {
  return createTamagui(config)
}

export type TamaguiConfig = ReturnType<typeof createTamaguiConfig>

declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiConfig {}
}
