import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@/components/button'
import { Steps } from '@/components/steps'
import { Welcome } from '@/components/welcome'

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 40,
        paddingTop: 36,
        paddingBottom: 48,
        paddingHorizontal: 40,
      }}
    >
      <Welcome />
      <Steps />

      <Button onPress={() => router.navigate('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </SafeAreaView>
  )
}
