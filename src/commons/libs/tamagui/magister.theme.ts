import { magisterTokens } from '@/commons/libs/tamagui/magister.tokens'
import { defaultConfig } from '@tamagui/config/v4'

export const magisterTheme = {
  ...defaultConfig.themes.light,
}

export const magisterButtonTheme = {
  background: magisterTokens.color.papyrusExtraLight,
  backgroundHover: magisterTokens.color.papyrusLight,
  backgroundPress: magisterTokens.color.papyrusLight,
  backgroundFocus: magisterTokens.color.papyrusLight,
  borderColor: magisterTokens.color.papyrusExtraDark,
  borderColorHover: magisterTokens.color.papyrusDark,
  borderColorPress: magisterTokens.color.papyrusDark,
  borderColorFocus: magisterTokens.color.papyrusDark,
}

export const magisterThemes = {
  ...defaultConfig.themes,
  magister: magisterTheme,
  magister_Button: magisterButtonTheme,
}
