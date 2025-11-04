import { newMagisterSchema } from './new-magister-schema'

describe('magisterCreationSchema', () => {
  it('should be valid', () => {
    const magisterCreation = newMagisterSchema.parse({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
    })

    expect(magisterCreation).toMatchInlineSnapshot(`
{
  "confirmPassword": "Password123!",
  "email": "john.doe@example.com",
  "name": "John Doe",
  "password": "Password123!",
}
`)
  })

  it('should be invalid with a password mismatch', () => {
    expect(() =>
      newMagisterSchema.parse({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'Password123!',
        confirmPassword: 'Password1234!',
      }),
    ).toThrow()
  })
})
