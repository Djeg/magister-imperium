export const supabaseUserMock = {
  id: '123',
  email: 'test@test.com',
}

export const supabaseAuthMock = {
  signUp: jest.fn().mockResolvedValue({ data: { user: supabaseUserMock } }),
  signInWithPassword: jest
    .fn()
    .mockResolvedValue({ data: { user: supabaseUserMock } }),
}

export const supabaseDataMock = {
  value: {
    // biome-ignore lint/suspicious/noExplicitAny: this mock is used to simulate the database, any is fine here
    error: null as any,
    // biome-ignore lint/suspicious/noExplicitAny: this mock is used to simulate the database, any is fine here
    data: null as any,
  },
  // biome-ignore lint/suspicious/noExplicitAny: same as above
  set: (value: { error: any; data: any }) => {
    supabaseDataMock.value = value
  },
  clear: () => {
    supabaseDataMock.value = {
      error: null,
      data: null,
    }
  },
}

export const supabaseQueryBuilderMock = {
  insert: jest.fn().mockReturnThis(),
  select: jest.fn().mockReturnThis(),
  single: jest.fn().mockReturnThis(),

  /**
   * biome-ignore lint/suspicious/noThenProperty: any is respecting the promise like interface
   * biome-ignore lint/suspicious/noExplicitAny: any is respecting the promise like interface
   */
  then: jest.fn().mockImplementation((fn?: (...args: any) => any) => {
    return Promise.resolve(
      fn ? fn(supabaseDataMock.value) : supabaseDataMock.value,
    )
  }),
}

export const supabaseFromMock = jest
  .fn()
  .mockReturnValue(supabaseQueryBuilderMock)

export const supabaseMock = {
  auth: supabaseAuthMock,
  from: supabaseFromMock,
}
