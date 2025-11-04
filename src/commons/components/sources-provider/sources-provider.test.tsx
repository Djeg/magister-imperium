import {
  SourcesProvider,
  SourcesProviderFailure,
  useSources,
} from '@/commons/components/sources-provider/sources-provider'
import { render, renderHook } from '@testing-library/react-native'
import { useEffect } from 'react'

jest.mock('@/commons/hooks/use-supabase/use-supabase')
jest.mock('@/recruitment/sources/recruitment-source.supabase')

describe('SourcesProvider', () => {
  it('should provide the app sources to the entire react tree using supabase', () => {
    let sources: any

    function HandleSources() {
      const currentSources = useSources()

      useEffect(() => {
        sources = currentSources
      }, [currentSources])

      return null
    }

    render(
      <SourcesProvider>
        <HandleSources />
      </SourcesProvider>,
    )

    expect(sources).toBeDefined()
    expect(sources.recruitment).toBeDefined()
  })

  it('should fail if the sources context is not found in the tree', () => {
    expect(() => renderHook(() => useSources())).toThrow(SourcesProviderFailure)
  })
})
