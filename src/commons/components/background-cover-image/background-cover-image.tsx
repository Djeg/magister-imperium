import { Image, type ImageProps, styled, View } from 'tamagui'

export type BackgroundCoverImageFilter =
  | 'none'
  | 'super-extra-light'
  | 'super-light'
  | 'extra-light'
  | 'light'
  | 'dark'
  | 'extra-dark'
  | 'super-dark'
  | 'super-extra-dark'

export type BackgroundCoverImageProps = ImageProps & {
  filter?: BackgroundCoverImageFilter
}

export function BackgroundCoverImage({
  filter = 'none',
  ...props
}: BackgroundCoverImageProps) {
  return (
    <View position="absolute" t={0} l={0} r={0} b={0} z={-10}>
      <Image {...props} width="100%" height="100%" objectFit="cover" />
      <BlackFrame filter={filter} />
    </View>
  )
}

const BlackFrame = styled(View, {
  bg: 'black',
  opacity: 0.2,
  position: 'absolute',
  t: 0,
  l: 0,
  r: 0,
  b: 0,

  variants: {
    filter: {
      none: {
        bg: 'black',
        opacity: 0,
      },
      light: {
        bg: 'white',
        opacity: 0.2,
      },
      'extra-light': {
        bg: 'white',
        opacity: 0.4,
      },
      'super-light': {
        bg: 'white',
        opacity: 0.6,
      },
      'super-extra-light': {
        bg: 'white',
        opacity: 0.8,
      },
      dark: {
        bg: 'black',
        opacity: 0.2,
      },
      'extra-dark': {
        bg: 'black',
        opacity: 0.4,
      },
      'super-dark': {
        bg: 'black',
        opacity: 0.6,
      },
      'super-extra-dark': {
        bg: 'black',
        opacity: 0.8,
      },
    } as const,
  },
})
