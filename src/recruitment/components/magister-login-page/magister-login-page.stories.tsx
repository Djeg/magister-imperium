import { MagisterLoginPage } from '@/recruitment/components/magister-login-page/magister-login-page'
import type { Meta, StoryObj } from '@storybook/react-native'

export default {
  title: 'recruitment/magister-login-page',
  component: MagisterLoginPage,
} satisfies Meta<typeof MagisterLoginPage>

type Story = StoryObj<typeof MagisterLoginPage>

export const MagisterLoginPageStory: Story = {}

MagisterLoginPageStory.storyName = 'MagisterLoginPage'
