import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import type { MagisterCredentials } from '@/recruitment/schemas/magister-credentials-schema/magister-credentials-schema'

export type MagisterLoginMutationPayload = {
  credentials: MagisterCredentials
}

export class MagisterLoginMutationFailure extends failure.named(
  'recruitment/mutations/magister-login-mutation',
) {}

export async function magisterMutationLogin({
  supabase,
  credentials,
}: SupabasePayload<MagisterLoginMutationPayload>) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  })

  if (error || !data.user) {
    failure(MagisterLoginMutationFailure, 'Failed to login the magister', {
      cause: error,
    })
  }

  return data.user.id
}
