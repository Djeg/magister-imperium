import { failure } from '@/commons/libs/failure/failure'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import {
  type RecruitmentSource,
  RecruitmentSourceFailure,
} from '@/recruitment/sources/recruitment-source'
import type { SupabaseClient } from '@supabase/supabase-js'

export function createSupabaseRecruitmentSource(
  supabase: SupabaseClient,
): RecruitmentSource {
  async function createMagister(newMagister: NewMagister) {
    const { data: userData, error: userError } = await supabase.auth.signUp({
      email: newMagister.email,
      password: newMagister.password,
    })

    if (userError || !userData.user) {
      failure(RecruitmentSourceFailure, 'Failed to sign up a new magister', {
        cause: userError,
      })
    }

    const { data: magisterData, error: magisterError } = await supabase
      .from('magisters')
      .insert({
        name: newMagister.name,
        user_id: userData.user.id,
      })
      .select('id, name, user_id')
      .single()

    if (magisterError || !magisterData) {
      failure(RecruitmentSourceFailure, 'Failed to insert the magister', {
        cause: magisterError,
      })
    }

    return magisterSchema.parse({
      ...magisterData,
      userId: magisterData.user_id,
    })
  }

  return {
    createMagister,
  }
}
