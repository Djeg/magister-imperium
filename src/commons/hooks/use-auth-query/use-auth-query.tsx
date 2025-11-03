import {
  AUTH_QUERY_KEY,
  authQuery,
} from '@/commons/queries/auth-query/auth-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useSupabase } from '../use-supabase/use-supabase'

export function useAuthQuery() {
  const supabase = useSupabase()

  return useSuspenseQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: () => authQuery({ supabase }),
  })
}
