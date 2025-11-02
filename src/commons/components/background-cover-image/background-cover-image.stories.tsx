import { BackgroundCoverImage } from '@/commons/components/background-cover-image/background-cover-image'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Meta, StoryObj } from '@storybook/react-native'

export default {
  title: 'commons/background-cover-image',
  component: BackgroundCoverImage,
  render: props => (
    <PageFrame edges={[]}>
      <BackgroundCoverImage
        source={require('@/assets/images/city-background.jpeg')}
        {...props}
      />
    </PageFrame>
  ),
} satisfies Meta<typeof BackgroundCoverImage>

type Story = StoryObj<typeof BackgroundCoverImage>

export const BackgroundCoverImageStory: Story = {
  argTypes: {
    filter: {
      control: 'radio',
      options: [
        'none',
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
    filter: 'none',
  },
}

BackgroundCoverImageStory.storyName = 'BackgroundCoverImage'
