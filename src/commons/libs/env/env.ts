import { once } from '@/commons/libs/fns/once'
import {
  type Env,
  type EnvKeys,
  envSchema,
} from '@/commons/schemas/env-schema/env-schema'

export function env<T extends EnvKeys>(key: T): NonNullable<Env[T]> {
  const env = parseEnv()
  const value = env[key]

  if (undefined === value) {
    throw new Error(`
      The environment variable "${key}" is not set!

      Please check your .env file
      and make sure it is set correctly inside the parseEnv function.
    `)
  }

  return value
}

const parseEnv = once((): Env => {
  const {
    success,
    data: env,
    error,
  } = envSchema.safeParse({
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_KEY,
    locale: process.env.EXPO_PUBLIC_DEFAULT_LOCALE,
    storybookEnabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED,
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
