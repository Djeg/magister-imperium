import type { ComponentProps } from 'react'
import { styled, Input as TamaguiInput, Text, YStack } from 'tamagui'

export type FormFieldProps = ComponentProps<typeof YStack> & {
  label: string
  errors?: string[]
}

export function FormField({
  label,
  errors,
  children,
  ...props
}: FormFieldProps) {
  return (
    <Field {...props}>
      <Label>{label}</Label>
      {children}
      {errors && errors.length > 0 && (
        <ErrorList>
          {errors.map(error => (
            <ErrorMessage key={error}>{error}</ErrorMessage>
          ))}
        </ErrorList>
      )}
    </Field>
  )
}

const Field = styled(YStack, {
  gap: '$2',
})

const Label = styled(Text, {
  fontWeight: 'bold',
})

const Input = styled(TamaguiInput, {
  rounded: 0,

  variants: {
    errored: {
      true: {
        borderWidth: 1,
        borderColor: 'red',
      },
      false: {
        borderWidth: 1,
        borderColor: '$color.goldExtraLight',
      },
    } as const,
  },
  defaultVariants: {
    errored: false,
  },
})

const ErrorList = styled(YStack, {
  gap: '$1',
})

const ErrorMessage = styled(Text, {
  color: 'red',
})

FormField.Field = Field
FormField.Input = Input
FormField.ErrorList = ErrorList
FormField.ErrorMessage = ErrorMessage
