import { t } from '@/commons/libs/translations/translations'
import z from 'zod'

export const emailSchema = z.email({
  message: t('commons.emailSchema.invalid'),
})

export type Email = z.infer<typeof emailSchema>
