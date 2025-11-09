import { emailSchema } from '@/commons/schemas/email-schema/email-schema'
import { passwordSchema } from '@/commons/schemas/password-schema/password-schema'
import { z } from 'zod'

export const magisterCredentialsSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type MagisterCredentials = z.infer<typeof magisterCredentialsSchema>
