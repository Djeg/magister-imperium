import type { Action } from '@/commons/libs/react/react.action'
import {
  type MagisterCreation,
  magisterCreationSchema,
} from '@/recruitment/schemas/magister-creation-schema/magister-creation-schema'
import { useForm } from '@tanstack/react-form'

export type UseMagisterCreationFormPayload = {
  onSign: Action<MagisterCreation>
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
      onSubmit: magisterCreationSchema,
    },
    onSubmit: ({ value }) => {
      return onSign(magisterCreationSchema.parse(value))
    },
  })
}

export type MagisterCreationForm = ReturnType<typeof useMagisterCreationForm>
