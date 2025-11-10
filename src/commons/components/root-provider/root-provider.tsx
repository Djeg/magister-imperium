import { FontProvider } from '@/commons/components/font-provider/font-provider'
import { GlobalErrorBoundary } from '@/commons/components/global-error-boundary/global-error-boundary'
import { SplashScreenSuspense } from '@/commons/components/splash-screen-suspense/splash-screen-suspense'
import { SupabaseProvider } from '@/commons/components/supabase-provider/supabase-provider'
import { TamaguiProvider } from '@/commons/components/tamagui-provider/tamagui-provider'
import { TanstackQueryProvider } from '@/commons/components/tanstack-query-provider/tanstack-query-provider'
import { TranslationsProvider } from '@/commons/components/translations-provider/translations-provider'
import type { ReactNode } from 'react'
import { AuthPilotProvider } from '../auth-pilot-provider/auth-pilot-provider'

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
                  <AuthPilotProvider>
                    <SplashScreenSuspense.Ending>
                      {children}
                    </SplashScreenSuspense.Ending>
                  </AuthPilotProvider>
                </TranslationsProvider>
              </SupabaseProvider>
            </GlobalErrorBoundary>
          </TanstackQueryProvider>
        </SplashScreenSuspense>
      </TamaguiProvider>
    </FontProvider>
  )
}
