import { t } from '@/commons/libs/translations/translations'
import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(8, {
    message: t('commons.passwordSchema.min'),
  })
  .regex(/[A-Z]{1}/, {
    message: t('commons.passwordSchema.maj'),
  })
  .regex(/[0-9]]{1}/, {
    message: t('commons.passwordSchema.number'),
  })
  .regex(/[@$!%*?&-_ ]{1}/, {
    message: t('commons.passwordSchema.special'),
  })

export type Password = z.infer<typeof passwordSchema>
