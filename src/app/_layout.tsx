import { useEffect } from 'react'
import { colors } from '@/styles/theme'
import { StatusBar } from 'expo-status-bar'
import { Stack, SplashScreen } from 'expo-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  useFonts,
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from '@expo-google-fonts/rubik'

import { queryClient } from '@/lib/react-query'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_400Regular,
    Rubik_600SemiBold,
  })

  useEffect(() => {
    if (hasLoadedFonts) {
      SplashScreen.hideAsync()
    }
  }, [hasLoadedFonts])

  return (
    <>
      <StatusBar translucent style="dark" backgroundColor="transparent" />

      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.gray[100] },
            }}
          />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </>
  )
}
