import { defaultConfig } from '@tamagui/config/v4'
import { createFont, createTamagui } from 'tamagui'
import { colors } from './tamagui.colors'

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
  tokens: {
    ...defaultConfig.tokens,
    color: colors.color,
  },
  fonts: {
    ...defaultConfig.fonts,
    body: pixelifySansFont,
    heading: pixelifySansFont,
  },
  themes: {
    ...defaultConfig.themes,
    light_Button: {
      background: colors.color.goldExtraLight,
      backgroundHover: colors.color.goldLight,
      backgroundPress: colors.color.goldLight,
      backgroundFocus: colors.color.goldLight,
      borderColor: colors.color.goldExtraDark,
      borderColorHover: colors.color.goldDark,
      borderColorPress: colors.color.goldDark,
      borderColorFocus: colors.color.goldDark,
    },
  },
})

export type TamaguiConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiConfig {}
}
