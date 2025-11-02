import {
  AUTH_QUERY_KEY,
  authQuery,
} from '@/commons/queries/auth-query/auth-query'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '../use-supabase/use-supabase'

export function useAuthQuery() {
  const supabase = useSupabase()

  return useQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: () => authQuery({ supabase }),
    throwOnError: false,
  })
}
