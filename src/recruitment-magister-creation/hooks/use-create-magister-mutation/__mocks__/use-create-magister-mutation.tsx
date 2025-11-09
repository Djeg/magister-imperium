import type { UseCreateMagisterMutationPayload } from '../use-create-magister-mutation'
import { createMagisterMutationFnMock } from './use-create-magister-mutation-mocks'

export function useCreateMagisterMutation(
  options: UseCreateMagisterMutationPayload,
) {
  return {
    mutateAsync: jest.fn().mockImplementation(async (...args) => {
      const data = await createMagisterMutationFnMock(...args)

      await Promise.resolve(options.onSuccess?.(data))

      return data
    }),
  }
}
