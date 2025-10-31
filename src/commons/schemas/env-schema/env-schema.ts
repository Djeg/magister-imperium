import z from 'zod'

export const envSchema = z.object({
  supabaseUrl: z.url(),
  supabaseAnonKey: z.string(),
  locale: z.enum(['fr', 'en']).default('fr'),
})

export type Env = z.infer<typeof envSchema>

export type EnvKeys = keyof Env
