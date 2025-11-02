import type { ReactNode } from 'react'
import { FontProvider } from '../font-provider/font-provider'
import { GlobalErrorBoundary } from '../global-error-boundary/global-error-boundary'
import { SplashScreenSuspense } from '../splash-screen-suspense/splash-screen-suspense'
import { SupabaseProvider } from '../supabase-provider/supabase-provider'
import { TamaguiProvider } from '../tamagui-provider/tamagui-provider'
import { TanstackQueryProvider } from '../tanstack-query-provider/tanstack-query-provider'
import { TranslationsProvider } from '../translations-provider/translations-provider'

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
                  <SplashScreenSuspense.Ending>
                    {children}
                  </SplashScreenSuspense.Ending>
                </TranslationsProvider>
              </SupabaseProvider>
            </GlobalErrorBoundary>
          </TanstackQueryProvider>
        </SplashScreenSuspense>
      </TamaguiProvider>
    </FontProvider>
  )
}
