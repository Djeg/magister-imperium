import { env } from '@/commons/libs/env/env'
import { messagesEn } from '@/commons/libs/translations/messages.en'
import { messagesFr } from '@/commons/libs/translations/messages.fr'
import { init, t } from 'i18next'
import type { Paths } from 'type-fest'

export type TranslationKey = Paths<
  typeof messagesFr & typeof messagesEn,
  {
    leavesOnly: true
  }
>

export function translate<T extends TranslationKey>(key: T) {
  return t(key)
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
