import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context'
import { ScrollView, styled, View } from 'tamagui'

export type PageFrameProps = SafeAreaViewProps & {
  scrollable?: boolean
}

export function PageFrame({ scrollable = false, ...props }: PageFrameProps) {
  if (scrollable) {
    return (
      <ScrollView flex={1} contentContainerStyle={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }} {...props} />
      </ScrollView>
    )
  }

  return <SafeAreaView style={{ flex: 1 }} {...props} />
}

const Centered = styled(View, {
  flex: 1,
  justify: 'center',
  items: 'center',

  variants: {
    withHorizontalPadding: {
      true: {
        px: '$4',
      },
      false: {
        px: 0,
      },
    } as const,
  },
})

const Vertical = styled(View, {
  flex: 1,

  variants: {
    withHorizontalPadding: {
      true: {
        px: '$4',
      },
      false: {
        px: 0,
      },
    } as const,
  },
})

PageFrame.Centered = Centered
PageFrame.Vertical = Vertical
