import { ComponentType } from 'react'
import { View, Text } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'

import { s } from './styles'
import { colors } from '@/styles/theme'

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
