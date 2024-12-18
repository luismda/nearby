import { Pressable, type PressableProps, Text } from 'react-native'

import { colors } from '@/styles/theme'
import { categoriesIcons } from '@/utils/categories-icons'
import { s } from './style'

interface CategoryProps extends PressableProps {
  name: string
  iconId: string
  isSelected?: boolean
}

export function Category({
  name,
  iconId,
  isSelected = false,
  ...props
}: CategoryProps) {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...props}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  )
}
