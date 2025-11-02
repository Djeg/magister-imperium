import type { Meta, StoryObj } from '@storybook/react-native'
import { MagisterLoginPage } from './magister-login-page'

export default {
  title: 'recruitment/magister-login-page',
  component: MagisterLoginPage,
} satisfies Meta<typeof MagisterLoginPage>

type Story = StoryObj<typeof MagisterLoginPage>

export const MagisterLoginPageStory: Story = {}

MagisterLoginPageStory.storyName = 'MagisterLoginPage'
