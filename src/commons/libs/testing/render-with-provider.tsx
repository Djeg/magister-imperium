import { AuthPilotProvider } from '@/commons/components/auth-pilot-provider/auth-pilot-provider'
import { SupabaseProvider } from '@/commons/components/supabase-provider/supabase-provider'
import { TamaguiProvider } from '@/commons/components/tamagui-provider/tamagui-provider'
import { configureI18next } from '@/commons/libs/translations/translations'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  type RenderHookOptions,
  type RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native'
import type { PropsWithChildren } from 'react'

jest.mock('@/commons/libs/supabase/supabase')
jest.mock('@/commons/components/auth-pilot-provider/auth-pilot-provider')

export async function renderWithProviders(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  await configureI18next()

  return render(ui, {
    wrapper: TestingProviders,
    ...options,
  })
}

export async function renderHookWithProviders<T>(
  hook: () => T,
  options?: RenderHookOptions<T>,
) {
  await configureI18next()

  return renderHook(hook, {
    wrapper: TestingProviders,
    ...options,
  })
}

export function TestingProviders({ children }: PropsWithChildren) {
  return (
    <TamaguiProvider>
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
        <SupabaseProvider>
          <AuthPilotProvider>{children}</AuthPilotProvider>
        </SupabaseProvider>
      </QueryClientProvider>
    </TamaguiProvider>
  )
}
