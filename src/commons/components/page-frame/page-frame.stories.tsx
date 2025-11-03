import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Heading } from 'tamagui'

export default {
  title: 'commons/page-frame',
  component: PageFrame,
  args: {
    edges: [],
  },
} satisfies Meta<typeof PageFrame>

type Story = StoryObj<typeof PageFrame>

export const Centered: Story = {
  render: () => {
    return (
      <PageFrame.Centered>
        <Heading text="center">Centered Page Frame</Heading>
      </PageFrame.Centered>
    )
  },
}

Centered.storyName = 'Centered'

export const Vertical: Story = {
  render: () => {
    return (
      <PageFrame.Vertical withHorizontalPadding>
        <Heading text="center">Vertical Page Frame</Heading>
      </PageFrame.Vertical>
    )
  },
}

Vertical.storyName = 'Vertical'
