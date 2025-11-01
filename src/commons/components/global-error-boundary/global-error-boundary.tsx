import { t } from '@/commons/libs/translations/translations'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Button, Heading, View } from 'tamagui'

export type GlobalErrorBoundaryProps = {
  children: ReactNode
}

export function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return (
    <ErrorBoundary fallbackRender={() => <GlobalErrorFallback />}>
      {children}
    </ErrorBoundary>
  )
}

function GlobalErrorFallback() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <View flex={1} items="center" justify="center">
          <Heading>{t('commons.GlobalErrorFallback.title')}</Heading>
          <Button onPress={reset}>
            {t('commons.GlobalErrorFallback.reset')}
          </Button>
        </View>
      )}
    </QueryErrorResetBoundary>
  )
}

GlobalErrorBoundary.Fallback = GlobalErrorFallback
