import { Failure } from '@/commons/libs/failure/failure'
import { authSchema } from './auth-schema'

describe('authSchema', () => {
  it('should be valid without magister', () => {
    const auth = authSchema.parse({
      authenticated: true,
    })

    expect(auth).toMatchInlineSnapshot(`
{
  "authenticated": true,
}
`)
  })

  it('should be valid with magister', () => {
    const auth = authSchema.parse({
      authenticated: true,
      magister: {
        id: '1',
        userId: '1',
        name: 'John Doe',
      },
    })

    expect(auth).toMatchInlineSnapshot(`
{
  "authenticated": true,
  "magister": {
    "id": "1",
    "name": "John Doe",
    "userId": "1",
  },
}
`)
  })

  it('should be valid with failure', () => {
    const auth = authSchema.parse({
      authenticated: true,
      failure: new Failure('test', 'Failed to query auth'),
    })

    expect(auth).toMatchInlineSnapshot(`
{
  "authenticated": true,
  "failure": [test: Failed to query auth],
}
`)
  })
})
