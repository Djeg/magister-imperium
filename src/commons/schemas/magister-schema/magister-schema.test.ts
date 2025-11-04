import { magisterSchema } from './magister-schema'

describe('magisterSchema', () => {
  it('should be valid', () => {
    const magister = magisterSchema.parse({
      id: '1',
      userId: '1',
      name: 'John Doe',
    })

    expect(magister).toMatchInlineSnapshot(`
{
  "id": "1",
  "name": "John Doe",
  "userId": "1",
}
`)
  })
})
