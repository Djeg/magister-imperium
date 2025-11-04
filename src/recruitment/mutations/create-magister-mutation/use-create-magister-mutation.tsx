import { useAuthActions } from '@/commons/components/auth-provider/auth-provider'
import { useSources } from '@/commons/components/sources-provider/sources-provider'
import { createMagisterMutation } from '@/recruitment/mutations/create-magister-mutation/create-magister-mutation'
import type { NewMagisterInput } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import { useMutation } from '@tanstack/react-query'

export type UseCreationMagisterMutationPayload = {
  newMagister: NewMagisterInput
}

export function useCreateMagisterMutation() {
  const sources = useSources()
  const { authenticate } = useAuthActions()

  return useMutation({
    mutationFn: async ({ newMagister }: UseCreationMagisterMutationPayload) => {
      await createMagisterMutation({
        sources,
        newMagister,
        onSuccess: authenticate,
      })
    },
  })
}
