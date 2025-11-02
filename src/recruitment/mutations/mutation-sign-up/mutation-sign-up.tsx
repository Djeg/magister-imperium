import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import type { MagisterCreation } from '@/recruitment/schemas/magister-creation-schema/magister-creation-schema'

export type MutationSignUpPayload = {
  newMagister: MagisterCreation
}

export class MutationSignUpFailure extends failure.named(
  'recruitment/mutations/mutation-sign-up',
) {}

export async function mutationSignUp({
  supabase,
  newMagister,
}: SupabasePayload<MutationSignUpPayload>) {
  const { data, error } = await supabase.auth.signUp({
    email: newMagister.email,
    password: newMagister.password,
  })

  if (error || !data.user) {
    failure(MutationSignUpFailure, 'Failed to sign up a new magister', {
      cause: error,
    })
  }

  return data.user
}
