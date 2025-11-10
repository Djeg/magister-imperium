import { SupabaseProviderFailure } from '@/commons/failures/supabase-provider-failure'
import { supabaseMock } from '@/commons/libs/supabase/__mocks__/supabase.mocks'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { renderHook } from '@testing-library/react-native'
import { useSupabase } from './use-supabase'

describe('useSupabase', () => {
  it('should throw an error if the supabase is not found in the context', async () => {
    expect(() => renderHook(() => useSupabase())).toThrow(
      SupabaseProviderFailure,
    )
  })

  it('should return the supabase', async () => {
    const { result } = await renderHookWithProviders(() => useSupabase())

    expect(result.current).toEqual(supabaseMock)
  })
})
