import { MagisterCreationPage } from '@/recruitment/components/magister-creation-page/magister-creation-page'
import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'

export default {
  title: 'recruitment/magister-creation-page',
  component: MagisterCreationPage,
  args: {
    onSign: action('onSign'),
  },
} satisfies Meta<typeof MagisterCreationPage>

type Story = StoryObj<typeof MagisterCreationPage>

export const MagisterCreationPageStory: Story = {}

MagisterCreationPageStory.storyName = 'MagisterCreationPage'
