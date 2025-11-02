import type { Action } from '@/commons/libs/react/react.action'
import {
  type MagisterCredentials,
  magisterCredentialsSchema,
} from '@/recruitment/schemas/magister-credentials-schema/magister-credentials-schema'
import { useForm } from '@tanstack/react-form'

export type UseMagisterLoginFormPayload = {
  onSubmit: Action<MagisterCredentials>
}

export function useMagisterLoginForm({
  onSubmit,
}: UseMagisterLoginFormPayload) {
  return useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: magisterCredentialsSchema,
    },
    onSubmit: ({ value }) => {
      return onSubmit(magisterCredentialsSchema.parse(value))
    },
  })
}
