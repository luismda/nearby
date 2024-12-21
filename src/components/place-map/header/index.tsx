import { Button } from '@/components/button'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { s } from './styles'

export function Header() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[s.container, { top: insets.top + 28 }]}>
      <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
        <Button.Icon icon={IconArrowLeft} />
      </Button>
    </View>
  )
}
