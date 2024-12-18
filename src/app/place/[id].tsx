import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import {
  IconArrowLeft,
  IconMapPin,
  IconScan,
  IconTicket,
} from '@tabler/icons-react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { useMemo, useRef, useState } from 'react'
import { Modal, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useGetPlace, useRescueCoupon } from '@/api'
import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Cover } from '@/components/place-details/cover'
import { Details } from '@/components/place-details/details'
import { colors, fontFamily } from '@/styles/theme'

export default function Place() {
  const insets = useSafeAreaInsets()
  const [, requestCameraPermission] = useCameraPermissions()

  const qrCodeRead = useRef(false)
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => ['25%'], [])

  const [isCameraModalOpened, setIsCameraModalOpened] = useState(false)

  const params = useLocalSearchParams<{ id: string }>()
  const { data: place, isLoading } = useGetPlace(params.id)

  const {
    data: couponCode,
    isPending: isRescuingCoupon,
    mutate: rescueCoupon,
  } = useRescueCoupon()

  async function handleOpenCamera() {
    try {
      const { granted } = await requestCameraPermission()

      if (!granted) {
        return
      }

      qrCodeRead.current = false
      setIsCameraModalOpened(true)
    } catch (error) {
      console.warn(error)
    }
  }

  async function handleRescueCoupon(placeId: string) {
    rescueCoupon(placeId, {
      onSuccess: () => {
        setIsCameraModalOpened(false)
        bottomSheetRef.current?.expand()
      },
    })
  }

  if (isLoading) {
    return <Loading />
  }

  if (!place) {
    return <Redirect href="/home" />
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Cover uri={place.cover} />
      <Details data={place} />

      <View
        style={{
          gap: 12,
          padding: 32,
          marginTop: 'auto',
          flexDirection: 'row',
          paddingBottom: insets.bottom + 32,
        }}
      >
        <Button style={{ width: 56 }}>
          <Button.Icon icon={IconMapPin} />
        </Button>

        <Button style={{ flex: 1 }} disabled={place.coupons === 0} onPress={handleOpenCamera}>
          <Button.Icon icon={IconScan} />
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal
        style={{ flex: 1 }}
        visible={isCameraModalOpened}
        statusBarTranslucent
      >
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrCodeRead.current) {
              qrCodeRead.current = true

              setTimeout(() => handleRescueCoupon(data), 500)
            }
          }}
        />

        <View
          style={{
            position: 'absolute',
            left: 32,
            right: 32,
            bottom: insets.bottom + 32,
          }}
        >
          <Button
            isLoading={isRescuingCoupon}
            onPress={() => setIsCameraModalOpened(false)}
          >
            <Button.Icon icon={IconArrowLeft} />
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>

      {!!couponCode && (
        <BottomSheet
          detached
          ref={bottomSheetRef}
          enablePanDownToClose
          snapPoints={snapPoints}
          bottomInset={insets.bottom + 28}
          handleIndicatorStyle={{
            width: 80,
            height: 4,
            opacity: 0.4,
            backgroundColor: colors.green.light,
          }}
          backgroundStyle={{
            backgroundColor: colors.green.soft,
            shadowColor: colors.green.base,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          style={{
            marginHorizontal: 32,
          }}
        >
          <BottomSheetView
            style={{
              flex: 1,
              padding: 16,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: fontFamily.medium,
                color: colors.gray[500],
              }}
            >
              Utilize o cupom
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 12,
                gap: 8,
              }}
            >
              <IconTicket size={24} color={colors.green.base} />

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fontFamily.bold,
                  color: colors.gray[600],
                  textTransform: 'uppercase',
                }}
              >
                {couponCode}
              </Text>
            </View>

            <Button
              style={{
                height: 40,
                width: '100%',
                marginTop: 'auto',
              }}
              onPress={() => bottomSheetRef.current?.close()}
            >
              <Button.Title>Fechar</Button.Title>
            </Button>
          </BottomSheetView>
        </BottomSheet>
      )}
    </ScrollView>
  )
}
