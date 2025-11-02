import { failure } from '@/commons/libs/failure/failure'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'

export const QUERY_MAGISTER_KEY = 'commons/queries/magister'

export type QueryMagisterPayload = {
  userId: string
}

export async function queryMagister({
  supabase,
  userId,
}: SupabasePayload<QueryMagisterPayload>) {
  const { data, error } = await supabase
    .from('magisters')
    .select('id, userId, name')
    .eq('userId', userId)
    .single()

  if (error) {
    throw failure(
      'commons/queries/query-magister',
      'Failed to query magister by the given user id',
      {
        cause: error,
      },
    )
  }

  return magisterSchema.parse(data)
}

export function queryMagisterKey({ userId }: QueryMagisterPayload) {
  return [QUERY_MAGISTER_KEY, userId] as const
}
