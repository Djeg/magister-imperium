import { TamaguiProvider } from '@/commons/components/tamagui-provider/tamagui-provider'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <TamaguiProvider>
      <Stack />
    </TamaguiProvider>
  )
}
