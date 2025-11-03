import { magisterFonts } from '@/commons/libs/tamagui/magister.fonts'
import { magisterThemes } from '@/commons/libs/tamagui/magister.theme'
import { magisterTokens } from '@/commons/libs/tamagui/magister.tokens'
import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  tokens: magisterTokens,
  fonts: magisterFonts,
  themes: magisterThemes,
})

export type TamaguiConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiConfig {}
}
