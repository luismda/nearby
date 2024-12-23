import type { IconProps } from '@tabler/icons-react-native'
import type { ComponentType } from 'react'
import { Text, View } from 'react-native'

import { colors } from '@/styles/theme'
import { s } from './styles'

interface StepProps {
  title: string
  description: string
  icon: ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: StepProps) {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View style={s.info}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}
