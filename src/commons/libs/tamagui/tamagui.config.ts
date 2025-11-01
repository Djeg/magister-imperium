import { defaultConfig } from '@tamagui/config/v4'
import { createFont, createTamagui } from 'tamagui'

export const pixelifySansFont = createFont({
  family: 'PixelifySans_400Regular',
  size: {
    ...defaultConfig.fonts.body.size,
  },
  weight: {
    ...defaultConfig.fonts.body.weight,
  },
  letterSpacing: {
    ...defaultConfig.fonts.body.letterSpacing,
  },
  lineHeight: {
    ...defaultConfig.fonts.body.lineHeight,
  },
  face: {
    100: { normal: 'PixelifySans_400Regular' },
    200: { normal: 'PixelifySans_400Regular' },
    300: { normal: 'PixelifySans_400Regular' },
    400: { normal: 'PixelifySans_400Regular' },
    500: { normal: 'PixelifySans_500Medium' },
    600: { normal: 'PixelifySans_600SemiBold' },
    700: { normal: 'PixelifySans_700Bold' },
    800: { normal: 'PixelifySans_700Bold' },
    900: { normal: 'PixelifySans_700Bold' },
    bold: { normal: 'PixelifySans_700Bold' },
    semibold: { normal: 'PixelifySans_600SemiBold' },
    medium: { normal: 'PixelifySans_500Medium' },
    regular: { normal: 'PixelifySans_400Regular' },
  },
})

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  fonts: {
    ...defaultConfig.fonts,
    body: pixelifySansFont,
    heading: pixelifySansFont,
  },
})

export type TamaguiConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiConfig {}
}
