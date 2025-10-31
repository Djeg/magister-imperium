import { createSupabaseClient } from '@/commons/libs/supabase/supabase'

test('should create a supabase client instance', () => {
  const supabase = createSupabaseClient()
  expect(supabase).toBeDefined()
  expect(supabase).toHaveProperty('auth')
  expect(supabase).toHaveProperty('from')
})
