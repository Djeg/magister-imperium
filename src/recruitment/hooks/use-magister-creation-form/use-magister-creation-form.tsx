import type { Action } from '@/commons/libs/react/react.action'
import {
  type NewMagister,
  newMagisterSchema,
} from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import { useForm } from '@tanstack/react-form'

export type UseMagisterCreationFormPayload = {
  onSign: Action<NewMagister>
}

export function useMagisterCreationForm({
  onSign,
}: UseMagisterCreationFormPayload) {
  return useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: newMagisterSchema,
    },
    onSubmit: ({ value }) => {
      return onSign(newMagisterSchema.parse(value))
    },
  })
}

export type MagisterCreationForm = ReturnType<typeof useMagisterCreationForm>
