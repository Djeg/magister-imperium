import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import { newMagisterMutation } from '@/recruitment/mutations/new-magister-mutation/new-magister-mutation'
import {
  type SignUpMutationPayload,
  signUpMutation,
} from '@/recruitment/mutations/sign-up-mutation/sign-up-mutation'
import { useMutation } from '@tanstack/react-query'

export function useSignUpMutation() {
  const supabase = useSupabase()

  return useMutation({
    mutationFn: async ({ newMagister }: SignUpMutationPayload) => {
      const user = await signUpMutation({ supabase, newMagister })
      const magister = await newMagisterMutation({
        supabase,
        userId: user.id,
        newMagister,
      })

      return magister
    },
  })
}
