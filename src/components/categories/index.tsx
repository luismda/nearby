import { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useFetchCategories } from '@/api'
import { Category } from '../category'
import { s } from './styles'

interface CategoriesProps {
  selected: string | null
  onSelect: (id: string) => void
}

export function Categories({ selected, onSelect }: CategoriesProps) {
  const insets = useSafeAreaInsets()
  const { data: categories } = useFetchCategories()

  useEffect(() => {
    if (categories && categories.length > 0) {
      onSelect(categories[0].id)
    }
  }, [categories, onSelect])

  if (!categories || categories.length === 0) {
    return
  }

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => item.id}
      contentContainerStyle={s.content}
      showsHorizontalScrollIndicator={false}
      style={[s.container, { top: insets.top + 36 }]}
      renderItem={({ item }) => (
        <Category
          iconId={item.id}
          name={item.name}
          isSelected={selected === item.id}
          onPress={() => onSelect(item.id)}
        />
      )}
    />
  )
}
