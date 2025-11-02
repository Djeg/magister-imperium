import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'
import { MagisterCreationHeaderNav } from './magister-creation-header-nav'

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
