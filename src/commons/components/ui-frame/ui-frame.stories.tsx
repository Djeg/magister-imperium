import type { Meta, StoryObj } from '@storybook/react-native'
import { Text, View } from 'tamagui'
import { UIFrame } from './ui-frame'

export default {
  title: 'commons',
  component: UIFrame,
  argTypes: {
    frameSize: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
  },
  render: props => (
    <View flex={1} items="center" justify="center">
      <UIFrame {...props}>
        <View px="$8" py="$6">
          <Text color="black" text="center">
            Some Content
          </Text>
        </View>
      </UIFrame>
    </View>
  ),
} satisfies Meta<typeof UIFrame>

type Story = StoryObj<typeof UIFrame>

export const UIFrameStory: Story = {
  args: {
    frameSize: 'md',
  },
}

UIFrameStory.storyName = 'UIFrame'
