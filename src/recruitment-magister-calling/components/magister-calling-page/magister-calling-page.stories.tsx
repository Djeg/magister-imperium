import { MagisterCallingPage } from '@/recruitment-magister-calling/components/magister-calling-page/magister-calling-page'
import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'

export default {
  title: 'recruitment/magister-calling-page',
  component: MagisterCallingPage,
  args: {
    onSign: action('onSign'),
    onJoin: action('onJoin'),
  },
} satisfies Meta<typeof MagisterCallingPage>

export const MagisterCallingPageStory: StoryObj<typeof MagisterCallingPage> = {
  args: {},
}

MagisterCallingPageStory.storyName = 'MagisterCallingPage'
