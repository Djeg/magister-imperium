import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'

export const MAGISTER_QUERY_KEY = 'commons/queries/magister'

export type MagisterQueryPayload = {
  userId: string
}

export class MagisterQueryFailure extends failure.named(
  'commons/queries/magister-query',
) {}

export async function magisterQuery({
  supabase,
  userId,
}: SupabasePayload<MagisterQueryPayload>) {
  const { data, error } = await supabase
    .from('magisters')
    .select('id, userId, name')
    .eq('userId', userId)
    .single()

  if (error) {
    failure(
      MagisterQueryFailure,
      'Failed to query magister by the given user id',
      {
        cause: error,
      },
    )
  }

  return magisterSchema.parse(data)
}

export function magisterQueryKey({ userId }: MagisterQueryPayload) {
  return [MAGISTER_QUERY_KEY, userId] as const
}
