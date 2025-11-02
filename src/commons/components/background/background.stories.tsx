import {
  Background,
  type BackgroundWithColorOverlayProps,
  type BackgroundWithCoverImageProps,
} from '@/commons/components/background/background'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Meta, StoryObj } from '@storybook/react-native'

export default {
  title: 'commons/background',
  component: Background as any,
  decorators: [
    Story => (
      <PageFrame edges={[]}>
        <Story />
      </PageFrame>
    ),
  ],
} satisfies Meta<
  | typeof Background.CoverImage
  | typeof Background.ColorOverlay
  | typeof Background
>

type Story = StoryObj<
  | typeof Background.CoverImage
  | typeof Background.ColorOverlay
  | typeof Background
>

export const BackgroundWithCoverImageStory: Story = {
  render: (props: BackgroundWithCoverImageProps) => (
    <Background.CoverImage
      source={require('@/assets/images/city-background.jpeg')}
      {...props}
    />
  ),
  argTypes: {
    filter: {
      control: 'radio',
      options: [
        'none',
        'transparent',
        'super-extra-light',
        'super-light',
        'extra-light',
        'light',
        'dark',
        'extra-dark',
        'super-dark',
        'super-extra-dark',
      ],
    },
  },
  args: {
    filter: 'transparent',
  },
}

export const BackgroundWithColorOverlayStory: Story = {
  render: ({ filter, ...restProps }: BackgroundWithColorOverlayProps) => (
    <Background.ColorOverlay filter={filter} {...restProps} />
  ),
  argTypes: {
    filter: {
      control: 'radio',
      options: [
        'none',
        'transparent',
        'super-extra-light',
        'super-light',
        'extra-light',
        'light',
        'dark',
        'extra-dark',
        'super-dark',
        'super-extra-dark',
      ],
    },
    bg: {
      control: 'color',
    },
  },
  args: {
    bg: 'red',
    filter: 'none',
  },
}

BackgroundWithCoverImageStory.storyName = 'Background.CoverImage'
BackgroundWithColorOverlayStory.storyName = 'Background.ColorOverlay'
