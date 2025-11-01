import { type ComponentProps, useMemo } from 'react'
import { Image, View } from 'tamagui'

export type UIFrameSize = 'sm' | 'md' | 'lg' | 'xl'

export type UIFrameProps = ComponentProps<typeof View> & {
  frameSize?: UIFrameSize
}

export function UIFrame({
  children,
  frameSize = 'md',
  ...props
}: UIFrameProps) {
  const sizeInPixels = useMemo(() => {
    switch (frameSize) {
      case 'md':
        return 8
      case 'sm':
        return 6
      case 'lg':
        return 12
      default:
        return 18
    }
  }, [frameSize])

  return (
    <View position="relative" p={sizeInPixels} {...props}>
      {children}
      <View position="absolute" t={0} l={0} r={0} b={0}>
        <Image
          position="absolute"
          t={0}
          l={0}
          width={sizeInPixels}
          height="100%"
          z={-10}
          source={require('@/assets/images/button-frame.left.png')}
          resizeMode="stretch"
        />
        <Image
          position="absolute"
          r={0}
          z={-10}
          source={require('@/assets/images/button-frame.right.png')}
          width={sizeInPixels}
          height="100%"
          resizeMode="stretch"
        />
        <Image
          position="absolute"
          z={-10}
          source={require('@/assets/images/button-frame.top.png')}
          width="100%"
          height={sizeInPixels}
          resizeMode="stretch"
        />
        <Image
          position="absolute"
          b={0}
          z={-10}
          source={require('@/assets/images/button-frame.bottom.png')}
          width="100%"
          height={sizeInPixels}
          resizeMode="stretch"
        />
      </View>
    </View>
  )
}
