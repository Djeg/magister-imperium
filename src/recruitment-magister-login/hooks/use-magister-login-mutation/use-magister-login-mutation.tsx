import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import { failure } from '@/commons/libs/failure/failure'
import type { MagisterCredentials } from '@/recruitment-magister-login/schemas/magister-credentials-schema/magister-credentials-schema'
import { useMutation } from '@tanstack/react-query'

export type MagisterLoginMutationPayload = {
  credentials: MagisterCredentials
}

export function useMagisterLoginMutation() {
  const supabase = useSupabase()

  return useMutation({
    mutationFn: async ({ credentials }: MagisterLoginMutationPayload) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      })

      if (error || !data.user) {
        failure(
          MagisterLoginMutationSignInFailure,
          'Failed to sign in the magister',
          {
            cause: error,
          },
        )
      }

      return data.user.id
    },
  })
}

export class MagisterLoginMutationSignInFailure extends failure.named(
  'recruitment-magister-login/hooks/use-magister-login-mutation/magister-login-mutation-sign-in-failure',
) {}
