import { passwordSchema } from './password-schema'

describe('passwordSchema', () => {
  it('should be valid', () => {
    const password = passwordSchema.parse('Password123!')

    expect(password).toMatchInlineSnapshot(`"Password123!"`)
  })

  it('should be invalid with less than 8 characters', () => {
    expect(() => passwordSchema.parse('Pa12!')).toThrow()
  })

  it('should be invalid with less than one uppercase letter', () => {
    expect(() => passwordSchema.parse('password123!')).toThrow()
  })

  it('should be invalid with less than one number', () => {
    expect(() => passwordSchema.parse('Password!')).toThrow()
  })

  it('should be invalid with less than one special character', () => {
    expect(() => passwordSchema.parse('Password123')).toThrow()
  })
})
