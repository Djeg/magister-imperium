import { supabaseMock } from './supabase.mocks'

export const createSupabaseClient = jest.fn().mockReturnValue(supabaseMock)
