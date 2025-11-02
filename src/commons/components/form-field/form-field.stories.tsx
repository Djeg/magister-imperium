import type { Meta, StoryObj } from '@storybook/react-native'
import { StoryUIDecorator } from '../storybook/story-ui-decorator'
import { FormField } from './form-field'

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
