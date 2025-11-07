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
          MagisterMutationFailToSignUpFailure,
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
          MagisterMutationFailToInsertFailure,
          'Failed to insert the magister',
          {
            cause: magisterError,
          },
        )
      }

      const { error, data } = magisterSchema.safeParse({
        ...magisterData,
        userId: magisterData.user_id,
      })

      if (error) {
        failure(
          MagisterMutationFailToParseDataFailure,
          'Invalid magister data received',
          {
            cause: error,
          },
        )
      }

      return data
    },
    onSuccess,
  })
}

export class MagisterMutationFailToSignUpFailure extends failure.named(
  'recruitment/hooks/use-create-magister-mutation/magister-mutation-fail-to-sign-up-failure',
) {}

export class MagisterMutationFailToInsertFailure extends failure.named(
  'recruitment/hooks/use-create-magister-mutation/magister-mutation-fail-to-insert-failure',
) {}

export class MagisterMutationFailToParseDataFailure extends failure.named(
  'recruitment/hooks/use-create-magister-mutation/magister-mutation-fail-to-parse-magister-data-failure',
) {}
