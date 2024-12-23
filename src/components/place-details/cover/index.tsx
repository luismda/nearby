import { IconArrowLeft } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { ImageBackground, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/button'
import { s } from './styles'

interface CoverProps {
  uri: string
}

export function Cover({ uri }: CoverProps) {
  const insets = useSafeAreaInsets()

  return (
    <ImageBackground source={{ uri }} style={s.container}>
      <View style={[s.header, { paddingTop: insets.top + 28 }]}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  )
}
