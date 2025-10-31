import { GlobalErrorBoundary } from '@/commons/components/global-error-boundary/global-error-boundary'
import { SplashScreenSuspense } from '@/commons/components/splash-screen-suspense/splash-screen-suspense'
import { SupabaseProvider } from '@/commons/components/supabase-provider/supabase-provider'
import { TamaguiProvider } from '@/commons/components/tamagui-provider/tamagui-provider'
import { TranslationsProvider } from '@/commons/components/translations-provider/translations-provider'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <SplashScreenSuspense>
      <GlobalErrorBoundary>
        <TamaguiProvider>
          <SupabaseProvider>
            <TranslationsProvider>
              <SplashScreenSuspense.Ending>
                <Stack />
              </SplashScreenSuspense.Ending>
            </TranslationsProvider>
          </SupabaseProvider>
        </TamaguiProvider>
      </GlobalErrorBoundary>
    </SplashScreenSuspense>
  )
}
