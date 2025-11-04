import { AuthActionsContext } from '@/commons/components/auth-provider/auth-provider'
import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  type CreateMagisterMutationPayload,
  createMagisterMutation,
} from '@/recruitment/mutations/create-magister-mutation/create-magister-mutation'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'

export function useCreateMagisterMutation() {
  const supabase = useSupabase()
  const { authenticate } = useContext(AuthActionsContext)

  return useMutation({
    mutationFn: async ({ newMagister }: CreateMagisterMutationPayload) => {
      const magister = await createMagisterMutation({ supabase, newMagister })

      authenticate(magister)
      console.warn(`Magister ${magister.name} created and authenticated`)
    },
  })
}
