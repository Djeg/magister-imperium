import type { PropsWithChildren } from 'react'
import { ScrollView, View } from 'tamagui'

export type StoryUIDecoratorProps = PropsWithChildren & {
  centered?: boolean
}

export function StoryUIDecorator({
  children,
  centered = true,
}: StoryUIDecoratorProps) {
  return (
    <ScrollView flex={1} p="$2">
      <View items={centered ? 'center' : 'unset'}>{children}</View>
    </ScrollView>
  )
}
