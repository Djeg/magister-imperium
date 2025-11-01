import { GlobalErrorBoundary } from '@/commons/components/global-error-boundary/global-error-boundary'
import { SplashScreenSuspense } from '@/commons/components/splash-screen-suspense/splash-screen-suspense'
import { SupabaseProvider } from '@/commons/components/supabase-provider/supabase-provider'
import { TamaguiProvider } from '@/commons/components/tamagui-provider/tamagui-provider'
import { TanstackQueryProvider } from '@/commons/components/tanstack-query-provider/tanstack-query-provider'
import { TranslationsProvider } from '@/commons/components/translations-provider/translations-provider'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <TamaguiProvider>
      <SplashScreenSuspense>
        <TanstackQueryProvider>
          <GlobalErrorBoundary>
            <SupabaseProvider>
              <TranslationsProvider>
                <SplashScreenSuspense.Ending>
                  <Stack screenOptions={{ headerShown: false }} />
                </SplashScreenSuspense.Ending>
              </TranslationsProvider>
            </SupabaseProvider>
          </GlobalErrorBoundary>
        </TanstackQueryProvider>
      </SplashScreenSuspense>
    </TamaguiProvider>
  )
}
