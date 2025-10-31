import { once } from '@/commons/libs/fns/once'
import { z } from 'zod'

export const envSchema = z.object({
  supabaseUrl: z.url(),
  supabaseAnonKey: z.string(),
})

export type Env = z.infer<typeof envSchema>

export type EnvKeys = keyof Env

export function env<T extends EnvKeys>(key: T): Env[T] {
  const env = parseEnv()
  const value = env[key]

  if (!value) {
    throw new Error(`
      The environment variable "${key}" is not set!

      Please check your .env file
      and make sure it is set correctly inside the parseEnv function.
    `)
  }

  return value
}

export const parseEnv = once((): Env => {
  const {
    success,
    data: env,
    error,
  } = envSchema.safeParse({
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_KEY,
  })

  if (!success) {
    throw new Error(
      `
      The environment configuration is not valid!

      Please check your .env file
      and make sure it is set correctly inside the parseEnv function.
    `,
      { cause: error },
    )
  }

  return env
})
