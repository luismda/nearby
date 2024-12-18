import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUsedCoupons } from './get-used-coupons'
import { USED_COUPONS_KEY } from './keys'

export async function addUsedCoupon(placeId: string) {
  const dates = await getUsedCoupons(placeId)
  const updatedDates = [...dates, new Date().toISOString()]

  await AsyncStorage.setItem(
    `${USED_COUPONS_KEY}:${placeId}`,
    JSON.stringify(updatedDates)
  )
}
