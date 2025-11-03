import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  type MagisterLoginMutationPayload,
  magisterMutationLogin,
} from '@/recruitment/mutations/magister-login-mutation/magister-login-mutation'
import { useMutation } from '@tanstack/react-query'

export function useMagisterLoginMutation() {
  const supabase = useSupabase()

  return useMutation({
    mutationFn: async ({ credentials }: MagisterLoginMutationPayload) => {
      return magisterMutationLogin({ supabase, credentials })
    },
  })
}
