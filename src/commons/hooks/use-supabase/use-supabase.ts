import { SupabaseContext } from '@/commons/components/supabase-provider/supabase-provider'
import { SupabaseProviderFailure } from '@/commons/failures/supabase-provider-failure'
import { failure } from '@/commons/libs/failure/failure'
import { useContext } from 'react'

export function useSupabase() {
  const supabase = useContext(SupabaseContext)

  if (!supabase) {
    failure(
      SupabaseProviderFailure,
      `
      Supabase context not found in the tree

      Here are some clues about what might be causing this:
      - You are missing a <SupabaseProvider> component in the tree
      - You are not inside a <SupabaseProvider> component
      - You are not using the useSupabase hook inside a component that is a child of a <SupabaseProvider> component
    `,
    )
  }

  return supabase
}
