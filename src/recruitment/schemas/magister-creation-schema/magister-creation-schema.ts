import { t } from '@/commons/libs/translations/translations'
import { emailSchema } from '@/commons/schemas/email-schema/email-schema'
import { nameSchema } from '@/commons/schemas/name-schema/name-schema'
import { passwordSchema } from '@/commons/schemas/password-schema/password-schema'
import { z } from 'zod'

export const magisterCreationSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: t('recruitment.magisterCreationSchema.passwordMismatch'),
    path: ['confirmPassword'],
  })

export type MagisterCreation = z.infer<typeof magisterCreationSchema>
