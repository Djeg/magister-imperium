import { configureI18next } from '@/commons/libs/translations/translations'
import type { ReactNode } from 'react'

export type TranslationsProviderProps = {
  children: ReactNode
}

export function TranslationsProvider({ children }: TranslationsProviderProps) {
  useConfigureI18next()

  return children
}

export let i18nCache: Awaited<ReturnType<typeof configureI18next>> | null = null

function useConfigureI18next() {
  if (i18nCache) return i18nCache

  const promise = configureI18next().then(i18n => {
    i18nCache = i18n
  })

  throw promise
}
