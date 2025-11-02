import type { Meta, StoryObj } from '@storybook/react-native'
import { action } from 'storybook/actions'
import { MagisterCreationPage } from './magister-creation-page'

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
