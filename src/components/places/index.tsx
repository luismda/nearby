import { router } from 'expo-router'
import { useMemo, useRef } from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import { s } from './styles'
import { Place } from '../place'
import { FetchPlacesResponse } from '@/api'

interface PlacesProps {
  data: FetchPlacesResponse[]
}

export function Places({ data }: PlacesProps) {
  const insets = useSafeAreaInsets()
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const maxContentSize = useMemo(() =>
    dimensions.height - (insets.top + 128),
  [dimensions, insets])

  const snapPoints = useMemo(() => ({
    min: 278,
    max: maxContentSize,
  }), [maxContentSize])

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enableOverDrag={false}
      backgroundStyle={s.container}
      handleIndicatorStyle={s.indicator}
      maxDynamicContentSize={maxContentSize}
      snapPoints={[snapPoints.min, snapPoints.max]}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/place/${item.id}`)}
          />
        )}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore locais perto de você</Text>
        )}
      />
    </BottomSheet>
  )
}
