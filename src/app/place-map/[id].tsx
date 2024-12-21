import { Redirect, router, useLocalSearchParams } from 'expo-router'
import { Image, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { useGetPlace } from '@/api'
import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Card } from '@/components/place-map/card'
import { Header } from '@/components/place-map/header'
import { colors } from '@/styles/theme'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function PlaceMap() {
  const params = useLocalSearchParams<{ id: string }>()
  const { data: place, isLoading: isLoadingPlace } = useGetPlace(params.id)

  if (isLoadingPlace) {
    return <Loading />
  }

  if (!place) {
    return <Redirect href="/home" />
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[200] }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: place.latitude,
          longitude: place.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude,
          }}
        >
          <Image
            source={require('@/assets/pin.png')}
            style={{ width: 40, height: 54 }}
            resizeMode="contain"
          />
        </Marker>
      </MapView>

      <Header />

      <Card
        name={place.name}
        coupons={place.coupons}
        address={place.address}
        phone={place.phone}
      />
    </View>
  )
}
