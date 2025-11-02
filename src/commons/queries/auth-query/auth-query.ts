import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import { authSchema } from '@/commons/schemas/auth-schema/auth-schema'
import { magisterQuery } from '../magister-query/magister-query'

export const AUTH_QUERY_KEY = 'commons/queries/auth'

export class AuthQueryFailure extends failure.named(
  'commons/queries/auth-query',
) {}

export async function authQuery({ supabase }: SupabasePayload) {
  const { data, error } = await supabase.auth.getUser()

  if (!data) {
    return authSchema.parse({
      authenticated: false,
    })
  }

  if (error) {
    failure(AuthQueryFailure, 'Failed to query auth', {
      cause: error,
    })
  }

  const magister = await magisterQuery({ supabase, userId: data.user?.id })

  return authSchema.parse({
    authenticated: true,
    magister,
  })
}
