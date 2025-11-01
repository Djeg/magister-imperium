import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

export type TanstackQueryProviderProps = {
  children: ReactNode
  client?: QueryClient
}

export function TanstackQueryProvider({
  children,
  client = createQueryClient(),
}: TanstackQueryProviderProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

function createQueryClient() {
  return new QueryClient()
}
