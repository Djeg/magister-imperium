import { t } from '@/commons/libs/translations/translations'
import z from 'zod'

export const nameSchema = z.string().min(1, {
  message: t('commons.nameSchema.invalid'),
})

export type Name = z.infer<typeof nameSchema>
