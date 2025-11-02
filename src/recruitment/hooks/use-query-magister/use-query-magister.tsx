import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  type QueryMagisterPayload,
  queryMagister,
  queryMagisterKey,
} from '@/recruitment/queries/query-magister/query-magister'
import { useQuery } from '@tanstack/react-query'

export function useQueryMagister({ userId }: QueryMagisterPayload) {
  const supabase = useSupabase()

  return useQuery({
    queryKey: queryMagisterKey({ userId }),
    queryFn: () => queryMagister({ supabase, userId }),
  })
}
