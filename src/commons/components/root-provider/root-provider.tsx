import { AuthProvider } from '@/commons/components/auth-provider/auth-provider'
import { FontProvider } from '@/commons/components/font-provider/font-provider'
import { GlobalErrorBoundary } from '@/commons/components/global-error-boundary/global-error-boundary'
import { SplashScreenSuspense } from '@/commons/components/splash-screen-suspense/splash-screen-suspense'
import { SupabaseProvider } from '@/commons/components/supabase-provider/supabase-provider'
import { TamaguiProvider } from '@/commons/components/tamagui-provider/tamagui-provider'
import { TanstackQueryProvider } from '@/commons/components/tanstack-query-provider/tanstack-query-provider'
import { TranslationsProvider } from '@/commons/components/translations-provider/translations-provider'
import type { ReactNode } from 'react'

export type RootProviderProps = {
  children: ReactNode
}

export function RootProvider({ children }: RootProviderProps) {
  return (
    <FontProvider>
      <TamaguiProvider>
        <SplashScreenSuspense>
          <TanstackQueryProvider>
            <GlobalErrorBoundary>
              <SupabaseProvider>
                <TranslationsProvider>
                  <AuthProvider>
                    <SplashScreenSuspense.Ending>
                      {children}
                    </SplashScreenSuspense.Ending>
                  </AuthProvider>
                </TranslationsProvider>
              </SupabaseProvider>
            </GlobalErrorBoundary>
          </TanstackQueryProvider>
        </SplashScreenSuspense>
      </TamaguiProvider>
    </FontProvider>
  )
}
