import type { Meta, StoryObj } from '@storybook/react-native'
import { MagisterCreationPage } from './magister-creation-page'

export default {
  title: 'recruitment/magister-creation-page',
  component: MagisterCreationPage,
} satisfies Meta<typeof MagisterCreationPage>

type Story = StoryObj<typeof MagisterCreationPage>

export const MagisterCreationPageStory: Story = {
  args: {},
}

MagisterCreationPageStory.storyName = 'MagisterCreationPage'
