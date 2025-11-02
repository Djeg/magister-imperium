import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import type { MagisterCredentials } from '@/recruitment/schemas/magister-credentials-schema/magister-credentials-schema'

export type MutationMagisterLoginPayload = {
  credentials: MagisterCredentials
}

export class MutationMagisterLoginFailure extends failure.named(
  'recruitment/mutations/mutation-magister-login',
) {}

export async function mutationMagisterLogin({
  supabase,
  credentials,
}: SupabasePayload<MutationMagisterLoginPayload>) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  })

  if (error || !data.user) {
    failure(MutationMagisterLoginFailure, 'Failed to login the magister', {
      cause: error,
    })
  }

  return data.user.id
}
