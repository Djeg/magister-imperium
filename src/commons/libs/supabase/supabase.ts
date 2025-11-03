import { env } from '@/commons/libs/env/env'
import type { Database } from '@/commons/libs/supabase/supabase.types'
import { createClient } from '@supabase/supabase-js'

export type SupabaseClient = ReturnType<typeof createClient<Database>>

export function createSupabaseClient(): SupabaseClient {
  return createClient<Database>(env('supabaseUrl'), env('supabaseAnonKey'))
}

export type SupabasePayload<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  supabase: SupabaseClient
} & T
