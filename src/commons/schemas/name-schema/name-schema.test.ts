import { nameSchema } from './name-schema'

describe('nameSchema', () => {
  it('should be valid', () => {
    const name = nameSchema.parse('John Doe')

    expect(name).toMatchInlineSnapshot(`"John Doe"`)
  })

  it('should be invalid with less than 1 character', () => {
    expect(() => nameSchema.parse('')).toThrow()
  })
})
