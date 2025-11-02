import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { magisterFonts } from './magister.fonts'
import { magisterThemes } from './magister.theme'
import { magisterTokens } from './magister.tokens'

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
