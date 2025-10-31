import { env } from '@/commons/libs/env/env'
import { createClient } from '@supabase/supabase-js'

export type SupabaseClient = ReturnType<typeof createClient>

export function createSupabaseClient(): SupabaseClient {
  return createClient(env('supabaseUrl'), env('supabaseAnonKey'))
}
