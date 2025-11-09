import { env } from '@/commons/libs/env/env'
import { messagesEn, messagesFr } from '@/commons/libs/translations/messages'
import { t as baseT, init } from 'i18next'
import type { Paths, SharedUnionFieldsDeep } from 'type-fest'

type Translations = SharedUnionFieldsDeep<typeof messagesFr | typeof messagesEn>

export type TranslationKey = Paths<
  Translations,
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

export type Translatable = {
  id: TranslationKey
  values?: Record<string, string>
}
