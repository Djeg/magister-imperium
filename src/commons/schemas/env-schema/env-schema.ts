import z from 'zod'

export const envSchema = z.object({
  supabaseUrl: z.url(),
  supabaseAnonKey: z.string(),
})

export type Env = z.infer<typeof envSchema>

export type EnvKeys = keyof Env
