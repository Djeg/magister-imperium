import { env } from '@/commons/libs/env/env'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './supabase.types'

export type SupabaseClient = ReturnType<typeof createClient<Database>>

export function createSupabaseClient(): SupabaseClient {
  return createClient<Database>(env('supabaseUrl'), env('supabaseAnonKey'))
}
