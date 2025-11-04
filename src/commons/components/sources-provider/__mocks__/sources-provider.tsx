import { createSupabaseClient } from '@/commons/libs/supabase/__mocks__/supabase'
import { createSupabaseRecruitmentSource } from '@/recruitment/sources/__mocks__/recruitment-source.supabase'

export const createSources = jest.fn().mockReturnValue({
  recruitment: createSupabaseRecruitmentSource(createSupabaseClient()),
})
