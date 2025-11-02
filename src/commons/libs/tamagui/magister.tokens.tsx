import {
  type ColorDefinition,
  createColorCollection,
} from '@/commons/libs/colors/create-color-collection'
import { defaultConfig } from '@tamagui/config/v4'
import { createTokens } from 'tamagui'

const papyrus: ColorDefinition = {
  extraLight: '#f9efdc',
  light: '#f3dfbd',
  normal: '#edd5a6',
  dark: '#f4dabb',
  extraDark: '#e8cc90',
} as const

const gold: ColorDefinition = {
  extraLight: '#f9eeb6',
  light: '#F5E6A7',
  normal: '#FFD700',
  dark: '#B8860B',
  extraDark: '#8B6914',
} as const

export const magisterTokens = createTokens({
  ...defaultConfig.tokens,
  color: {
    ...createColorCollection('gold', gold),
    ...createColorCollection('papyrus', papyrus),
  },
})
