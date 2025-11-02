import type { Meta, StoryObj } from '@storybook/react-native'
import { MagisterCallingPage } from './magister-calling-page'

export default {
  title: 'recruitment/magister-calling-page',
  component: MagisterCallingPage,
} satisfies Meta<typeof MagisterCallingPage>

export const MagisterCallingPageStory: StoryObj<typeof MagisterCallingPage> = {
  args: {},
}

MagisterCallingPageStory.storyName = 'MagisterCallingPage'
