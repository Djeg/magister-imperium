import { MagisterQueryFailure } from '@/commons/failures/magister-query-failure'
import { supabaseDataMock } from '@/commons/libs/supabase/__mocks__/supabase.mocks'
import { renderHookWithProviders } from '@/commons/libs/testing/render-with-provider'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import { useFetchMagisterQuery } from './use-fetch-magister-query'

describe('useFetchMagisterQuery', () => {
  it('should fetch the magister', async () => {
    const magister = magisterSchema.parse({
      id: '1',
      userId: '1',
      name: 'John Doe',
    })

    supabaseDataMock.set({
      error: null,
      data: magister,
    })

    const { result } = await renderHookWithProviders(() =>
      useFetchMagisterQuery(),
    )

    expect(await result.current('1')).toEqual(magister)
  })

  it('should fail when the magister is not found', async () => {
    supabaseDataMock.set({
      error: new Error('Failed to query the magister'),
      data: null,
    })

    const { result } = await renderHookWithProviders(() =>
      useFetchMagisterQuery(),
    )

    await expect(result.current('1')).rejects.toThrow(MagisterQueryFailure)
  })

  it('should also fail when data resolved is not valid', async () => {
    supabaseDataMock.set({
      error: null,
      data: { invalid: 'data' },
    })

    const { result } = await renderHookWithProviders(() =>
      useFetchMagisterQuery(),
    )

    await expect(result.current('1')).rejects.toThrow()
  })
})
