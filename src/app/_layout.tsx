import { FontProvider } from '@/commons/components/font-provider/font-provider'
import { GlobalErrorBoundary } from '@/commons/components/global-error-boundary/global-error-boundary'
import { MagisterProvider } from '@/commons/components/magister-provider/magister-provider'
import { SplashScreenSuspense } from '@/commons/components/splash-screen-suspense/splash-screen-suspense'
import { SupabaseProvider } from '@/commons/components/supabase-provider/supabase-provider'
import { TamaguiProvider } from '@/commons/components/tamagui-provider/tamagui-provider'
import { TanstackQueryProvider } from '@/commons/components/tanstack-query-provider/tanstack-query-provider'
import { TranslationsProvider } from '@/commons/components/translations-provider/translations-provider'
import { MagisterCreationHeaderNav } from '@/recruitment/components/magister-creation-header-nav/magister-creation-header-nav'
import { router, Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <FontProvider>
      <TamaguiProvider>
        <SplashScreenSuspense>
          <TanstackQueryProvider>
            <GlobalErrorBoundary>
              <SupabaseProvider>
                <TranslationsProvider>
                  <SplashScreenSuspense.Ending>
                    <MagisterProvider>
                      <Stack>
                        <Stack.Screen
                          name="index"
                          options={{ headerShown: false }}
                        />
                        <Stack.Screen
                          name="(recruitment)/magister-creation"
                          options={{
                            animation: 'slide_from_left',
                            header: () => (
                              <MagisterCreationHeaderNav
                                onBack={() => router.back()}
                              />
                            ),
                          }}
                        />
                      </Stack>
                    </MagisterProvider>
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
