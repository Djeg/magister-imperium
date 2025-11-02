import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  type MagisterQueryPayload,
  magisterQuery,
  magisterQueryKey,
} from '@/commons/queries/magister-query/magister-query'
import { useQuery } from '@tanstack/react-query'

export function useMagisterQuery({ userId }: MagisterQueryPayload) {
  const supabase = useSupabase()

  return useQuery({
    queryKey: magisterQueryKey({ userId }),
    queryFn: () => magisterQuery({ supabase, userId }),
  })
}
