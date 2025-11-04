import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'

export type CreateMagisterMutationPayload = {
  newMagister: NewMagister
}

export class CreateMagisterMutationFailure extends failure.named(
  'recruitment/mutations/create-magister-mutation',
) {}

export async function createMagisterMutation({
  supabase,
  newMagister,
}: SupabasePayload<CreateMagisterMutationPayload>) {
  const { data: magisterData, error: magisterError } = await supabase
    .from('magisters')
    .insert({
      name: newMagister.name,
    })
    .select('id, name, user_id')
    .single()

  if (magisterError || !magisterData) {
    failure(CreateMagisterMutationFailure, 'Failed to insert the magister', {
      cause: magisterError,
    })
  }

  const { data: userData, error: userError } = await supabase.auth.signUp({
    email: newMagister.email,
    password: newMagister.password,
  })

  if (userError || !userData.user) {
    failure(CreateMagisterMutationFailure, 'Failed to sign up a new magister', {
      cause: userError,
    })
  }

  const { data: updatedMagisterData, error: updatedMagisterError } =
    await supabase
      .from('magisters')
      .update({
        user_id: userData.user.id,
      })
      .eq('id', magisterData.id)
      .select('id, name, user_id')
      .single()

  if (updatedMagisterError || !updatedMagisterData) {
    failure(
      CreateMagisterMutationFailure,
      'Failed to update the magister with the user id',
      {
        cause: updatedMagisterError,
      },
    )
  }

  return magisterSchema.parse({
    ...updatedMagisterData,
    userId: updatedMagisterData.user_id,
  })
}
