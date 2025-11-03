import { failure } from '@/commons/libs/failure/failure'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import type { MagisterCreation } from '@/recruitment/schemas/magister-creation-schema/magister-creation-schema'
import type { SupabaseClient } from '@supabase/supabase-js'

export type NewMagisterMutationPayload = {
  supabase: SupabaseClient
  userId: string
  newMagister: MagisterCreation
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
