import type { PropsWithChildren } from 'react'
import { ScrollView, View } from 'tamagui'

export function StoryUIDecorator({ children }: PropsWithChildren) {
  return (
    <ScrollView flex={1} py="$2">
      <View items="center">{children}</View>
    </ScrollView>
  )
}
