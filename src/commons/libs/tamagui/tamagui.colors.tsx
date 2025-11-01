import { createTokens } from 'tamagui'

type ColorDefinition = {
  extraLight: string
  light: string
  normal: string
  dark: string
  extraDark: string
}

const papyrus: ColorDefinition = {
  extraLight: '#e4e1d3',
  light: '#d7d3c2',
  normal: '#b9b4a3',
  dark: '#9c9886',
  extraDark: '#7f7a69',
} as const

const gold: ColorDefinition = {
  extraLight: '#f9eeb6',
  light: '#F5E6A7',
  normal: '#FFD700',
  dark: '#B8860B',
  extraDark: '#8B6914',
} as const

type ColorCollection<T extends string, C extends ColorDefinition> = {
  [K in T]: C['normal']
} & {
  [K in `${T}ExtraLight`]: C['extraLight']
} & {
  [K in `${T}Light`]: C['light']
} & {
  [K in `${T}Dark`]: C['dark']
} & {
  [K in `${T}ExtraDark`]: C['extraDark']
} & {
  [K in `${T}Normal`]: C['normal']
}

function createColorCollection<T extends string, C extends ColorDefinition>(
  name: T,
  color: C,
) {
  return {
    [name]: color.normal,
    [`${name}ExtraLight`]: color.extraLight,
    [`${name}Light`]: color.light,
    [`${name}Normal`]: color.normal,
    [`${name}Dark`]: color.dark,
    [`${name}ExtraDark`]: color.extraDark,
  } as ColorCollection<T, C>
}

export const colors = createTokens({
  color: {
    ...createColorCollection('gold', gold),
    ...createColorCollection('papyrus', papyrus),
  },
})
