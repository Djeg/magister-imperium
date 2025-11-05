import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import { failure } from '@/commons/libs/failure/failure'
import type { Action } from '@/commons/libs/react/react.action'
import {
  type Magister,
  magisterSchema,
} from '@/commons/schemas/magister-schema/magister-schema'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import { useMutation } from '@tanstack/react-query'

export type CreateMagisterMutationPayload = {
  newMagister: NewMagister
}

export class CreateMagisterMutationFailure extends failure.named(
  'recruitment/hooks/use-create-magister-mutation',
) {}

export type UseCreateMagisterMutationPayload = {
  onSuccess: Action<Magister>
}

export function useCreateMagisterMutation({
  onSuccess,
}: UseCreateMagisterMutationPayload) {
  const supabase = useSupabase()

  return useMutation({
    mutationFn: async ({ newMagister }: CreateMagisterMutationPayload) => {
      const { data: userData, error: userError } = await supabase.auth.signUp({
        email: newMagister.email,
        password: newMagister.password,
      })

      if (userError || !userData.user) {
        failure(
          CreateMagisterMutationFailure,
          'Failed to sign up a new magister',
          {
            cause: userError,
          },
        )
      }

      const { data: magisterData, error: magisterError } = await supabase
        .from('magisters')
        .insert({
          name: newMagister.name,
          user_id: userData.user.id,
        })
        .select('id, name, user_id')
        .single()

      if (magisterError || !magisterData) {
        failure(
          CreateMagisterMutationFailure,
          'Failed to insert the magister',
          {
            cause: magisterError,
          },
        )
      }

      const magister = magisterSchema.parse({
        ...magisterData,
        userId: magisterData.user_id,
      })

      return magister
    },
    onSuccess,
  })
}
