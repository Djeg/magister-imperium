import { Button } from '@/commons/components/button/button'
import type { Meta, StoryObj } from '@storybook/react-native'
import { fn } from 'storybook/test'
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
    children: 'Some Button',
    size: 'md',
    frameSize: 'md',
  },
}

DefaultButton.storyName = 'Button'
