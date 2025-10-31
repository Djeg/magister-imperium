import type { SupabaseClient } from '@/commons/libs/supabase/supabase'
import { createSupabaseClient } from '@/commons/libs/supabase/supabase'
import { createContext, type ReactNode } from 'react'

export const SupabaseContext = createContext<SupabaseClient | null>(null)

export type SupabaseProviderProps = {
  children: ReactNode
  client?: SupabaseClient
}

export function SupabaseProvider({
  children,
  client = createSupabaseClient(),
}: SupabaseProviderProps) {
  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  )
}
