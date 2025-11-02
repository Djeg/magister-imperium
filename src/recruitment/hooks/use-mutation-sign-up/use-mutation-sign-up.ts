import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import { mutationNewMagister } from '@/recruitment/mutations/mutation-new-magister/mutation-new-magister'
import {
  type MutationSignUpPayload,
  mutationSignUp,
} from '@/recruitment/mutations/mutation-sign-up/mutation-sign-up'
import { useMutation } from '@tanstack/react-query'

export function useMutationSignUp() {
  const supabase = useSupabase()

  return useMutation({
    mutationFn: async ({ newMagister }: MutationSignUpPayload) => {
      const user = await mutationSignUp({ supabase, newMagister })
      const magister = await mutationNewMagister({
        supabase,
        userId: user.id,
        newMagister,
      })

      return magister
    },
  })
}
