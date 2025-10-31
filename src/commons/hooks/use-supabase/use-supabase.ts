import { SupabaseContext } from '@/commons/components/supabase-provider/supabase-provider'
import { useContext } from 'react'

export function useSupabase() {
  const supabase = useContext(SupabaseContext)

  if (!supabase) {
    throw new Error(`
      Supabase context not found in the tree

      Please make sure you are inside a <SupabaseProvider> component.
    `)
  }

  return supabase
}
