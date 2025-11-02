import { Background } from '@/commons/components/background/background'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import type { ComponentProps } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XStack } from 'tamagui'

export type HeaderNavProps = ComponentProps<typeof DecoratedFrame>

export function HeaderNav({ children, ...props }: HeaderNavProps) {
  return (
    <DecoratedFrame sides={['bottom']} size="lg" {...props}>
      <Background.CoverImage
        source={require('@/assets/images/clouds-header-background.jpeg')}
        filter="light"
      />
      <SafeAreaView edges={['top']}>
        <XStack items="center" justify="space-between" p="$4">
          {children}
        </XStack>
      </SafeAreaView>
    </DecoratedFrame>
  )
}

export type HeaderNavLeftProps = ComponentProps<typeof XStack>

function Left(props: HeaderNavLeftProps) {
  return <XStack items="center" gap="$2" {...props} />
}

export type HeaderNavMiddleProps = ComponentProps<typeof XStack>

function Middle(props: HeaderNavMiddleProps) {
  return <XStack flex={1} items="center" justify="center" gap="$2" {...props} />
}

export type HeaderNavRightProps = ComponentProps<typeof XStack>

function Right(props: HeaderNavRightProps) {
  return <XStack items="center" gap="$2" {...props} />
}

HeaderNav.Left = Left
HeaderNav.Middle = Middle
HeaderNav.Right = Right
