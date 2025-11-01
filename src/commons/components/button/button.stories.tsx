import { Button } from '@/commons/components/button/button'
import type { Meta, StoryObj } from '@storybook/react-native'
import { fn } from 'storybook/test'
import { View } from 'tamagui'

const meta = {
  title: 'commons/button',
  component: Button,
  decorators: [
    Story => (
      <View flex={1} items="center" justify="center">
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPress: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  args: {
    children: 'Some Button',
  },
}

DefaultButton.storyName = 'Default'
