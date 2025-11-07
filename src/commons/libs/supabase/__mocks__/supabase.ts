import { supabaseMock } from '@/commons/libs/supabase/__mocks__/supabase-mocks'

export const createSupabaseClient = jest.fn().mockReturnValue(supabaseMock)
