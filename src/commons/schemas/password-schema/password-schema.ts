import { t } from '@/commons/libs/translations/translations'
import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(8, {
    message: t('commons.passwordSchema.min'),
  })
  .regex(/[A-Z]/, {
    message: t('commons.passwordSchema.maj'),
  })
  .regex(/[0-9]/, {
    message: t('commons.passwordSchema.number'),
  })
  .regex(/[!@#$%^&*(),.?":{}|<>£€$%*?&\-_+#@&=]/, {
    message: t('commons.passwordSchema.special'),
  })

export type Password = z.infer<typeof passwordSchema>
