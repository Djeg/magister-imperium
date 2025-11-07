import { t } from '@/commons/libs/translations/translations'
import { emailSchema } from '@/commons/schemas/email-schema/email-schema'
import { nameSchema } from '@/commons/schemas/name-schema/name-schema'
import { passwordSchema } from '@/commons/schemas/password-schema/password-schema'
import { z } from 'zod'

export const newMagisterSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: t(
      'recruitment-magister-creation.schemas.newMagisterSchema.passwordMismatch',
    ),
    path: ['confirmPassword'],
  })

export type NewMagister = z.infer<typeof newMagisterSchema>

export type NewMagisterInput = z.infer<typeof newMagisterSchema>
