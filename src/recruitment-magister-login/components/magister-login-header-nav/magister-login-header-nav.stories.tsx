import { MagisterLoginHeaderNav } from '@/recruitment-magister-login/components/magister-login-header-nav/magister-login-header-nav'
import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'

export default {
  title: 'recruitment/magister-login-header-nav',
  component: MagisterLoginHeaderNav,
  args: {
    onBack: action('onBack'),
  },
} satisfies Meta<typeof MagisterLoginHeaderNav>

type Story = StoryObj<typeof MagisterLoginHeaderNav>

export const MagisterLoginHeaderNavStory: Story = {}

MagisterLoginHeaderNavStory.storyName = 'MagisterLoginHeaderNav'
