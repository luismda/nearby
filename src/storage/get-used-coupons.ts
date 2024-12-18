import AsyncStorage from '@react-native-async-storage/async-storage'
import { USED_COUPONS_KEY } from './keys'

export async function getUsedCoupons(placeId: string) {
  const data = await AsyncStorage.getItem(`${USED_COUPONS_KEY}:${placeId}`)
  const dates: string[] = data ? JSON.parse(data) : []

  return dates
}
