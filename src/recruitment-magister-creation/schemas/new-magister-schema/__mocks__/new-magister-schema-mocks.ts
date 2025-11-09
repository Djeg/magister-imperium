import { newMagisterSchema } from '../new-magister-schema'

export const newMagisterMock = newMagisterSchema.parse({
  email: 'test@mail.com',
  password: 'Password123!',
  confirmPassword: 'Password123!',
  name: 'Test Magister',
})
