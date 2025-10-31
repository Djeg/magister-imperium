import { SplashScreen } from 'expo-router'
import { type ReactNode, Suspense, useEffect } from 'react'
import { Text } from 'tamagui'

export type SplashScreenSuspenseProps = {
  children: ReactNode
}

export function SplashScreenSuspense({ children }: SplashScreenSuspenseProps) {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
  }, [])

  return <Suspense fallback={<Text>Loading...</Text>}>{children}</Suspense>
}

export type SplashEndingProps = {
  children: ReactNode
}

function SplashEnding({ children }: SplashEndingProps) {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return children
}

SplashScreenSuspense.Ending = SplashEnding
