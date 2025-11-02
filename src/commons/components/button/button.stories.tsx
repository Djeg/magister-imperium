import { Button } from '@/commons/components/button/button'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import type { Meta, StoryObj } from '@storybook/react-native'
import { fn } from 'storybook/test'
import { Text } from 'tamagui'
import { StoryUIDecorator } from '../storybook/story-ui-decorator'

const meta = {
  title: 'commons/button',
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
    frameSize: {
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
  tags: ['autodocs'],
  args: { onPress: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  args: {
    size: 'md',
    frameSize: 'md',
  },
  render: props => (
    <Button {...props}>
      <Text>Some Button</Text>
    </Button>
  ),
}

DefaultButton.storyName = 'Button'

export const ButtonIconStory: Story = {
  args: {
    size: 'md',
    frameSize: 'md',
  },
  render: props => (
    <Button {...props}>
      <FontAwesome name="home" size={16} />
    </Button>
  ),
}

ButtonIconStory.storyName = 'Button - with Icon'

export const ButtonIconGroupStory: Story = {
  args: {
    size: 'md',
    frameSize: 'md',
  },
  render: props => (
    <Button {...props}>
      <Button.Group>
        <FontAwesome name="home" size={16} />
        <Text>Home</Text>
      </Button.Group>
    </Button>
  ),
}

ButtonIconGroupStory.storyName = 'Button - with Icon and Text'
