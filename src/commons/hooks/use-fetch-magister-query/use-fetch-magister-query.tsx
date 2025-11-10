import { MagisterQueryFailure } from '@/commons/failures/magister-query-failure'
import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import { failure } from '@/commons/libs/failure/failure'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import { useQueryClient } from '@tanstack/react-query'

export const MAGISTER_QUERY_KEY = 'commons/magister'

export function useFetchMagisterQuery() {
  const supabase = useSupabase()
  const queryClient = useQueryClient()

  return (userId: string) => {
    return queryClient.fetchQuery({
      queryKey: [MAGISTER_QUERY_KEY, userId] as const,
      networkMode: 'always',
      queryFn: async () => {
        const { data, error } = await supabase
          .from('magisters')
          .select('id, user_id, name')
          .eq('user_id', userId)
          .single()

        if (error) {
          failure(
            MagisterQueryFailure,
            `Failed to query magister using id ${userId}`,
            {
              cause: error,
            },
          )
        }

        return magisterSchema.parse({
          ...data,
          userId: data.user_id,
        })
      },
    })
  }
}
