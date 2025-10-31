import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Text } from 'tamagui'

export type GlobalErrorBoundaryProps = {
  children: ReactNode
}

export function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return (
    <ErrorBoundary fallbackRender={() => <Text>Error</Text>}>
      {children}
    </ErrorBoundary>
  )
}
