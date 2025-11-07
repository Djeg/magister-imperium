import { SupabaseProvider } from '@/commons/components/supabase-provider/supabase-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  type RenderHookOptions,
  type RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native'
import type { PropsWithChildren } from 'react'

export function renderWithProviders(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  return render(ui, {
    wrapper: TestingProviders,
    ...options,
  })
}

export function renderHookWithProviders<T>(
  hook: () => T,
  options?: RenderHookOptions<T>,
) {
  return renderHook(hook, {
    wrapper: TestingProviders,
    ...options,
  })
}

export function TestingProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
            },
            mutations: {
              retry: false,
            },
          },
        })
      }
    >
      <SupabaseProvider>{children}</SupabaseProvider>
    </QueryClientProvider>
  )
}
