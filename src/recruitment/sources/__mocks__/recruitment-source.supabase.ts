import { magisterMock } from '@/commons/schemas/magister-schema/__mocks__/magister-schema-mocks'

export const createMagisterMock = jest.fn().mockReturnValue(magisterMock)

export const createSupabaseRecruitmentSource = jest.fn().mockReturnValue({
  createMagister: createMagisterMock,
})
