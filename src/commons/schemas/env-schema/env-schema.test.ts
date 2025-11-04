import { envSchema } from './env-schema'

describe('envSchema', () => {
  it('should be valid', () => {
    const env = envSchema.parse({
      supabaseUrl: 'https://example.com',
      supabaseAnonKey: '1234567890',
      locale: 'fr',
      storybookEnabled: 'true',
    })

    expect(env).toMatchInlineSnapshot(`
{
  "locale": "fr",
  "storybookEnabled": true,
  "supabaseAnonKey": "1234567890",
  "supabaseUrl": "https://example.com",
}
`)
  })
})
