import { colors } from '@/styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'

import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik'

import { ToastMessage } from '@/components/toast-message'
import { queryClient } from '@/lib/react-query'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const insets = useSafeAreaInsets()

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

          <Toast
            topOffset={insets.top + 24}
            config={{
              info: ({ text1 }) => {
                return <ToastMessage message={text1 ?? ''} variant="info" />
              },
              success: ({ text1 }) => {
                return <ToastMessage message={text1 ?? ''} variant="success" />
              },
              error: ({ text1 }) => {
                return <ToastMessage message={text1 ?? ''} variant="error" />
              },
            }}
          />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </>
  )
}
