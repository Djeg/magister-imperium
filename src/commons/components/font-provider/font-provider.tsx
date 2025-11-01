import {
  PixelifySans_400Regular,
  PixelifySans_500Medium,
  PixelifySans_600SemiBold,
  PixelifySans_700Bold,
  useFonts,
} from '@expo-google-fonts/pixelify-sans'
import type { ReactNode } from 'react'

export type FontProviderProps = {
  children: ReactNode
}

export function FontProvider({ children }: FontProviderProps) {
  const [loaded, error] = useFonts({
    PixelifySans_400Regular,
    PixelifySans_500Medium,
    PixelifySans_600SemiBold,
    PixelifySans_700Bold,
  })

  if (!loaded) return null

  if (error) throw new Error('Failed to load fonts', { cause: error })

  return <>{children}</>
}
