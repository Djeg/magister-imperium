import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { StoryUIDecorator } from '@/commons/components/storybook/story-ui-decorator'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Text, View } from 'tamagui'

export default {
  title: 'commons/decorated-frame',
  component: DecoratedFrame,
  argTypes: {
    sides: {
      options: ['top', 'bottom', 'left', 'right'],
      control: 'multi-select',
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: 'radio',
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
    sides: ['top', 'bottom', 'left', 'right'],
  },
}

DecoratedFrameStory.storyName = 'DecoratedFrame'
