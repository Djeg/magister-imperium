import { env } from '@/commons/libs/env/env'
import { t as baseT, init } from 'i18next'
import type { Paths } from 'type-fest'
import { messagesEn, messagesFr } from './messages'

export type TranslationKey = Paths<
  typeof messagesFr & typeof messagesEn,
  {
    leavesOnly: true
  }
>

export function translate<T extends TranslationKey>(
  key: T,
  values?: Record<string, string>,
) {
  return baseT(key, values)
}

export function configureI18next() {
  return init({
    lng: env('locale'),
    fallbackLng: env('locale'),
    resources: {
      fr: {
        translation: messagesFr,
      },
      en: {
        translation: messagesEn,
      },
    },
  })
}

export const t = translate
