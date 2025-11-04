import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'

export type CreateMagitserMutationPayload = {
  newMagister: NewMagister
}

export class CreateMagisterMutationFailure extends failure.named(
  'recruitment/mutations/sign-up-mutation',
) {}

export async function createMagisterMutation({
  supabase,
  newMagister,
}: SupabasePayload<CreateMagitserMutationPayload>) {
  const { data, error } = await supabase.auth.signUp({
    email: newMagister.email,
    password: newMagister.password,
  })

  if (error || !data.user) {
    failure(CreateMagisterMutationFailure, 'Failed to sign up a new magister', {
      cause: error,
    })
  }

  return data.user
}
