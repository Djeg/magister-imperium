import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'
import { MagisterCallingPage } from './magister-calling-page'

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
