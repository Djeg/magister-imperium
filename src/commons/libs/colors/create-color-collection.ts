export type ColorDefinition = {
  extraLight: string
  light: string
  normal: string
  dark: string
  extraDark: string
}

export type ColorCollection<T extends string, C extends ColorDefinition> = {
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

export function createColorCollection<
  T extends string,
  C extends ColorDefinition,
>(name: T, color: C) {
  return {
    [name]: color.normal,
    [`${name}ExtraLight`]: color.extraLight,
    [`${name}Light`]: color.light,
    [`${name}Normal`]: color.normal,
    [`${name}Dark`]: color.dark,
    [`${name}ExtraDark`]: color.extraDark,
  } as ColorCollection<T, C>
}
