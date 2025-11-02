import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'
import { MagisterLoginHeaderNav } from './magister-login-header-nav'

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
