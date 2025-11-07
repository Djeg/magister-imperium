import { MagisterCreationHeaderNav } from '@/recruitment-magister-creation/components/magister-creation-header-nav/magister-creation-header-nav'
import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'

export default {
  title: 'recruitment/magister-creation-header-nav',
  component: MagisterCreationHeaderNav,
  args: {
    onBack: action('onBack'),
  },
} satisfies Meta<typeof MagisterCreationHeaderNav>

type Story = StoryObj<typeof MagisterCreationHeaderNav>

export const MagisterCreationHeaderNavStory: Story = {}

MagisterCreationHeaderNavStory.storyName = 'MagisterCreationHeaderNav'
