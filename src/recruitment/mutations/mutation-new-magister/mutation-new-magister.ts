import { failure } from '@/commons/libs/failure/failure'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import type { MagisterCreation } from '@/recruitment/schemas/magister-creation-schema/magister-creation-schema'
import type { SupabaseClient } from '@supabase/supabase-js'

export type MutationNewMagisterPayload = {
  supabase: SupabaseClient
  userId: string
  newMagister: MagisterCreation
}

export class MutationNewMagisterFailure extends failure.named(
  'recruitment/mutations/mutation-new-magister',
) {}

export async function mutationNewMagister({
  supabase,
  userId,
  newMagister,
}: MutationNewMagisterPayload) {
  const { data, error } = await supabase
    .from('magisters')
    .insert({
      user_id: userId,
      name: newMagister.name,
    })
    .select('id, name, user_id')
    .single()

  if (error || !data) {
    failure(MutationNewMagisterFailure, 'Failed to insert the magister', {
      cause: error,
    })
  }

  return magisterSchema.parse({
    ...data,
    userId: data.user_id,
  })
}
