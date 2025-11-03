import { FormField } from '@/commons/components/form-field/form-field'
import { StoryUIDecorator } from '@/commons/components/storybook/story-ui-decorator'
import type { Meta, StoryObj } from '@storybook/react-native'

export default {
  title: 'commons/form-field',
  component: FormField,
  args: {
    errors: [],
  },
  argTypes: {
    errors: {
      control: 'object',
    },
  },
  decorators: [
    Story => (
      <StoryUIDecorator centered={false}>
        <Story />
      </StoryUIDecorator>
    ),
  ],
} satisfies Meta<typeof FormField>

type Story = StoryObj<typeof FormField>

export const Input: Story = {
  args: {
    label: 'Email:',
    errors: [],
  },
  render: props => (
    <FormField {...props}>
      <FormField.Input autoCapitalize="none" placeholder="Enter your email" />
    </FormField>
  ),
}
