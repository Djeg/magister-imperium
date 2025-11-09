export const createMagisterMutationFnMock = jest
  .fn()
  .mockImplementation(async () => {
    return {
      id: '123',
      name: 'Test Magister',
      userId: '123',
    }
  })
