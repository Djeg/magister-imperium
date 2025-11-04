import { createSources } from '@/commons/components/sources-provider/sources-provider'
import { createSupabaseClient } from '@/commons/libs/supabase/supabase'
import { createMagisterMutation } from '@/recruitment/mutations/create-magister-mutation/create-magister-mutation'

jest.mock('@/commons/libs/supabase/supabase')
jest.mock('@/commons/components/sources-provider/sources-provider')

describe('createMagisterMutation', () => {
  const supabase = createSupabaseClient()
  const sources = createSources({ supabase })
  const onSuccess = jest.fn()

  it('should create a new magister', async () => {
    const magister = await createMagisterMutation({
      sources,
      onSuccess,
      newMagister: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
      },
    })

    expect(magister).toBeDefined()
    expect(onSuccess).toHaveBeenCalledWith(magister)
  })

  it('should invalidate invalid inputs', async () => {
    await expect(
      createMagisterMutation({
        sources,
        onSuccess,
        newMagister: {
          name: '',
          email: 'john.doe@example.com',
          password: 'word123!',
          confirmPassword: 'Password123!',
        },
      }),
    ).rejects.toThrow()
  })
})
