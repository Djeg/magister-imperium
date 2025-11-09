import { type ComponentProps, useMemo } from 'react'
import { Image, styled, View } from 'tamagui'

export type DecoratedFrameSides = 'top' | 'bottom' | 'left' | 'right'

export type DecoratedFrameSize = 'sm' | 'md' | 'lg' | 'xl'

export type DecoratedFrameProps = ComponentProps<typeof View> & {
  sides?: DecoratedFrameSides[]
  size?: DecoratedFrameSize
}

export function DecoratedFrame({
  children,
  size = 'md',
  sides = ['top', 'bottom', 'left', 'right'],
  ...props
}: DecoratedFrameProps) {
  const sizeInPixels = useMemo(() => {
    switch (size) {
      case 'md':
        return 8
      case 'sm':
        return 6
      case 'lg':
        return 12
      default:
        return 18
    }
  }, [size])

  return (
    <View position="relative" p={sizeInPixels} {...props}>
      {children}
      <AbsoluteWrapper>
        {sides.includes('left') ? (
          <Image
            position="absolute"
            t={0}
            l={0}
            width={sizeInPixels}
            height="100%"
            z={-10}
            source={require('@/commons/assets/images/button-frame.left.png')}
            resizeMode="stretch"
          />
        ) : null}
        {sides.includes('right') ? (
          <Image
            position="absolute"
            r={0}
            z={-10}
            source={require('@/commons/assets/images/button-frame.right.png')}
            width={sizeInPixels}
            height="100%"
            resizeMode="stretch"
          />
        ) : null}
        {sides.includes('top') ? (
          <Image
            position="absolute"
            z={-10}
            source={require('@/commons/assets/images/button-frame.top.png')}
            width="100%"
            height={sizeInPixels}
            resizeMode="stretch"
          />
        ) : null}
        {sides.includes('bottom') ? (
          <Image
            position="absolute"
            b={0}
            z={-10}
            source={require('@/commons/assets/images/button-frame.bottom.png')}
            width="100%"
            height={sizeInPixels}
            resizeMode="stretch"
          />
        ) : null}
      </AbsoluteWrapper>
    </View>
  )
}

const AbsoluteWrapper = styled(View, {
  position: 'absolute',
  t: 0,
  l: 0,
  r: 0,
  b: 0,
})
