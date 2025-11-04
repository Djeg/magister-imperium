import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  type CreateMagitserMutationPayload,
  createMagisterMutation,
} from '@/recruitment/mutations/create-magister-mutation/create-magister-mutation'
import { newMagisterMutation } from '@/recruitment/mutations/new-magister-mutation/new-magister-mutation'
import { useMutation } from '@tanstack/react-query'

export function useCreateMagisterMutation() {
  const supabase = useSupabase()

  return useMutation({
    mutationFn: async ({ newMagister }: CreateMagitserMutationPayload) => {
      const user = await createMagisterMutation({ supabase, newMagister })
      const magister = await newMagisterMutation({
        supabase,
        userId: user.id,
        newMagister,
      })

      return magister
    },
  })
}
