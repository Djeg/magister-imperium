import { RootProvider } from '@/commons/components/root-provider/root-provider'
import { MagisterCreationHeaderNav } from '@/recruitment-magister-creation/components/magister-creation-header-nav/magister-creation-header-nav'
import { MagisterLoginHeaderNav } from '@/recruitment-magister-login/components/magister-login-header-nav/magister-login-header-nav'
import { router, Stack } from 'expo-router'

export function RootLayout() {
  const handleBack = () => {
    router.back()
  }

  return (
    <RootProvider>
      <Stack>
        <Stack.Screen
          name="(recruitment)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(recruitment)/magister-creation"
          options={{
            animation: 'slide_from_left',
            header: () => <MagisterCreationHeaderNav onBack={handleBack} />,
          }}
        />
        <Stack.Screen
          name="(recruitment)/magister-login"
          options={{
            animation: 'slide_from_right',
            header: () => <MagisterLoginHeaderNav onBack={handleBack} />,
          }}
        />
      </Stack>
    </RootProvider>
  )
}
