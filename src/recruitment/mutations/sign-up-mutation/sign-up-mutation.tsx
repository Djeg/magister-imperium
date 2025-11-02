import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import type { MagisterCreation } from '@/recruitment/schemas/magister-creation-schema/magister-creation-schema'

export type SignUpMutationPayload = {
  newMagister: MagisterCreation
}

export class SignUpMutationFailure extends failure.named(
  'recruitment/mutations/sign-up-mutation',
) {}

export async function signUpMutation({
  supabase,
  newMagister,
}: SupabasePayload<SignUpMutationPayload>) {
  const { data, error } = await supabase.auth.signUp({
    email: newMagister.email,
    password: newMagister.password,
  })

  if (error || !data.user) {
    failure(SignUpMutationFailure, 'Failed to sign up a new magister', {
      cause: error,
    })
  }

  return data.user
}
