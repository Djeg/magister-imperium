const actual = jest.requireActual('@tanstack/react-query')

export const useMutationMock = jest.fn().mockImplementation(options => {
  return {
    ...actual.useMutation(options),
    mutateAsync: jest.fn().mockImplementation(async (...args) => {
      const data = await Promise.resolve(options.mutationFn(...args))

      options.onSuccess?.(data)

      return data
    }),
  }
})
