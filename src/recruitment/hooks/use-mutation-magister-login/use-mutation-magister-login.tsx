import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  type MutationMagisterLoginPayload,
  mutationMagisterLogin,
} from '@/recruitment/mutations/mutation-magister-login/mutation-magister-login'
import { useMutation } from '@tanstack/react-query'

export function useMutationMagisterLogin() {
  const supabase = useSupabase()

  return useMutation({
    mutationFn: async ({ credentials }: MutationMagisterLoginPayload) => {
      return mutationMagisterLogin({ supabase, credentials })
    },
  })
}
