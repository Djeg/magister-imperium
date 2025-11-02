import { RootProvider } from '@/commons/components/root-provider/root-provider'
import { MagisterCreationHeaderNav } from '@/recruitment/components/magister-creation-header-nav/magister-creation-header-nav'
import { router, Stack } from 'expo-router'

export function RootLayout() {
  return (
    <RootProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(recruitment)/magister-creation"
          options={{
            animation: 'slide_from_left',
            header: () => (
              <MagisterCreationHeaderNav onBack={() => router.back()} />
            ),
          }}
        />
      </Stack>
    </RootProvider>
  )
}
