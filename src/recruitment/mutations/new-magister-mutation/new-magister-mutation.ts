import { failure } from '@/commons/libs/failure/failure'
import type { SupabaseClient } from '@/commons/libs/supabase/supabase'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'

export type NewMagisterMutationPayload = {
  supabase: SupabaseClient
  userId: string
  newMagister: NewMagister
}

export class NewMagisterMutationFailure extends failure.named(
  'recruitment/mutations/new-magister-mutation',
) {}

export async function newMagisterMutation({
  supabase,
  userId,
  newMagister,
}: NewMagisterMutationPayload) {
  const { data, error } = await supabase
    .from('magisters')
    .insert({
      user_id: userId,
      name: newMagister.name,
    })
    .select('id, name, user_id')
    .single()

  if (error || !data) {
    failure(NewMagisterMutationFailure, 'Failed to insert the magister', {
      cause: error,
    })
  }

  return magisterSchema.parse({
    ...data,
    userId: data.user_id,
  })
}
