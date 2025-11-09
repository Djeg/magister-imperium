import { magisterCredentialsSchema } from './magister-credentials-schema'

describe('magisterCredentialsSchema', () => {
  it('should be valid', () => {
    const magisterCredentials = magisterCredentialsSchema.parse({
      email: 'john.doe@example.com',
      password: 'Password123!',
    })

    expect(magisterCredentials).toMatchInlineSnapshot(`
{
  "email": "john.doe@example.com",
  "password": "Password123!",
}
`)
  })
})
