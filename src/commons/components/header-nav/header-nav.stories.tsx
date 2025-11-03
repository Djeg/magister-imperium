import { HeaderNav } from '@/commons/components/header-nav/header-nav'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Heading } from 'tamagui'

export default {
  title: 'commons/header-nav',
  component: HeaderNav,
} satisfies Meta<typeof HeaderNav>

type Story = StoryObj<typeof HeaderNav>

export const HeaderNavStory: Story = {
  render: () => (
    <HeaderNav>
      <HeaderNav.Middle>
        <Heading text="center">Middle Nav Only</Heading>
      </HeaderNav.Middle>
    </HeaderNav>
  ),
}

export const HeaderNavWithLeftAndRight: Story = {
  render: () => (
    <HeaderNav>
      <HeaderNav.Left>
        <FontAwesome name="arrow-left" size={24} />
      </HeaderNav.Left>
      <HeaderNav.Middle>
        <Heading text="center">Left and Right Nav</Heading>
      </HeaderNav.Middle>
      <HeaderNav.Right>
        <FontAwesome name="cog" size={24} />
      </HeaderNav.Right>
    </HeaderNav>
  ),
}

HeaderNavStory.storyName = 'HeaderNav - Middle Nav Only'
HeaderNavWithLeftAndRight.storyName = 'HeaderNav - Left and Right Nav'
