import type { Meta, StoryObj } from '@storybook/react-native'
import { Text, View } from 'tamagui'
import { StoryUIDecorator } from '../storybook/story-ui-decorator'
import { DecoratedFrame } from './decorated-frame'

export default {
  title: 'commons/decorated-frame',
  component: DecoratedFrame,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    Story => (
      <StoryUIDecorator>
        <Story />
      </StoryUIDecorator>
    ),
  ],
  render: props => (
    <DecoratedFrame {...props}>
      <View px="$8" py="$6">
        <Text color="black" text="center">
          Some Content
        </Text>
      </View>
    </DecoratedFrame>
  ),
} satisfies Meta<typeof DecoratedFrame>

type Story = StoryObj<typeof DecoratedFrame>

export const DecoratedFrameStory: Story = {
  args: {
    size: 'md',
  },
}

DecoratedFrameStory.storyName = 'DecoratedFrame'
