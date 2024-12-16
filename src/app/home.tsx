import { useState } from 'react'
import { router } from 'expo-router'
import { Text, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'

import { useFetchPlaces } from '@/api'
import { Places } from '@/components/places'
import { colors, fontFamily } from '@/styles/theme'
import { Categories } from '@/components/categories'

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
}

export default function Home() {
  const [categoryId, setCategoryId] = useState<string | null>(null)

  const { data: places } = useFetchPlaces(categoryId)

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[200] }}>
      <Categories selected={categoryId} onSelect={setCategoryId} />

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          image={require('@/assets/location.png')}
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
        />

        {places?.map((item) => {
          return (
            <Marker
              key={item.id}
              identifier={item.id}
              image={require('@/assets/pin.png')}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
            >
              <Callout onPress={() => router.navigate(`/place/${item.id}`)}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fontFamily.medium,
                      color: colors.gray[600],
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 18,
                      fontFamily: fontFamily.regular,
                      color: colors.gray[600],
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <Places data={places ?? []} />
    </View>
  )
}
