import { emailSchema } from './email-schema'

describe('emailSchema', () => {
  it('should be valid', () => {
    const email = emailSchema.parse('test@example.com')

    expect(email).toMatchInlineSnapshot(`"test@example.com"`)
  })

  it('should be invalid with an invalid email', () => {
    expect(() => emailSchema.parse('test@example')).toThrow()
    expect(() => emailSchema.parse('test-example')).toThrow()
  })
})
