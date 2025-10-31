import { env } from '@/commons/libs/env/env'

test('should return the correct environment variables', () => {
  const supabaseUrl = env('supabaseUrl')
  const supabaseAnonKey = env('supabaseAnonKey')

  expect(supabaseUrl).toBeDefined()
  expect(supabaseAnonKey).toBeDefined()
})
