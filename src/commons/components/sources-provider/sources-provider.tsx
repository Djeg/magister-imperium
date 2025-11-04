import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import { failure } from '@/commons/libs/failure/failure'
import type { SupabaseClient } from '@/commons/libs/supabase/supabase'
import type { RecruitmentSource } from '@/recruitment/sources/recruitment-source'
import { createSupabaseRecruitmentSource } from '@/recruitment/sources/recruitment-source.supabase'
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
} from 'react'

export type Sources = {
  recruitment: RecruitmentSource
}

export const SourcesContext = createContext<Sources | null>(null)

export function SourcesProvider({ children }: PropsWithChildren) {
  const supabase = useSupabase()

  const sources = useMemo(() => createSources({ supabase }), [supabase])

  return (
    <SourcesContext.Provider value={sources}>
      {children}
    </SourcesContext.Provider>
  )
}

export function useSources() {
  const sources = useContext(SourcesContext)

  if (!sources) {
    failure(
      SourcesProviderFailure,
      `
      Sources context not found in the tree.
      
      Here are some clues to help you:
      - Your are missing a <SourcesProvider> component in your tree.
      - Your are using the useSources hook outside of a <SourcesProvider> component.
    `,
    )
  }

  return sources
}

export class SourcesProviderFailure extends failure.named(
  'commons/components/sources-provider',
) {}

export type SourcesPayload<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  sources: Sources
} & T

export type CreateSourcesPayload = {
  supabase: SupabaseClient
}

export function createSources({ supabase }: CreateSourcesPayload): Sources {
  return {
    recruitment: createSupabaseRecruitmentSource(supabase),
  }
}
