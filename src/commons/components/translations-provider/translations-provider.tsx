import { configureI18next } from '@/commons/libs/translations/translations'
import { type ReactNode, use } from 'react'

export type TranslationsProviderProps = {
  children: ReactNode
}

export function TranslationsProvider({ children }: TranslationsProviderProps) {
  use(configureI18next())

  return children
}
