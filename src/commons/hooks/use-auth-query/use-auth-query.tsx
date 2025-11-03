import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  AUTH_QUERY_KEY,
  authQuery,
} from '@/commons/queries/auth-query/auth-query'
import { useQuery } from '@tanstack/react-query'

export function useAuthQuery() {
  const supabase = useSupabase()

  return useQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: () => authQuery({ supabase }),
    retry: false,
  })
}
