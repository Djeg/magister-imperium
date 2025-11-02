import type { ComponentProps } from 'react'
import { Image, type ImageProps, styled, View } from 'tamagui'

export type BackgroundProps = ComponentProps<typeof View>

export function Background(props: BackgroundProps) {
  return <View position="absolute" t={0} l={0} r={0} b={0} z={-10} {...props} />
}

export type BackgroundOverlayFilter =
  | 'transparent'
  | 'none'
  | 'super-extra-light'
  | 'super-light'
  | 'extra-light'
  | 'light'
  | 'dark'
  | 'extra-dark'
  | 'super-dark'
  | 'super-extra-dark'

export type BackgroundWithCoverImageProps = ImageProps & {
  backgroundProps?: BackgroundProps
  filter?: BackgroundOverlayFilter
  colorOverlayProps?: ComponentProps<typeof ColorOverlay>
}

function WithCoverImage({
  filter = 'transparent',
  backgroundProps = {},
  colorOverlayProps = {},
  ...props
}: BackgroundWithCoverImageProps) {
  return (
    <Background {...backgroundProps}>
      <Image {...props} width="100%" height="100%" objectFit="cover" />
      <ColorOverlay filter={filter} {...colorOverlayProps} />
    </Background>
  )
}

const ColorOverlay = styled(View, {
  bg: 'black',
  opacity: 0.2,
  position: 'absolute',
  t: 0,
  l: 0,
  r: 0,
  b: 0,

  variants: {
    filter: {
      transparent: {
        bg: 'transparent',
        opacity: 0,
      },
      none: {
        bg: 'black',
        opacity: 1,
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
      light: {
        bg: 'white',
        opacity: 0.2,
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

export type BackgroundWithColorOverlayProps = ComponentProps<
  typeof ColorOverlay
> & {
  backgroundProps?: BackgroundProps
}

function WithColorOverlay({
  backgroundProps = {},
  filter = 'none',
  ...props
}: BackgroundWithColorOverlayProps) {
  return (
    <Background {...backgroundProps}>
      <ColorOverlay filter={filter} {...props} />
    </Background>
  )
}

Background.CoverImage = WithCoverImage
Background.ColorOverlay = WithColorOverlay
