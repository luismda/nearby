import { api } from '@/lib/axios'

export async function rescueCoupon(placeId: string) {
  const { data } = await api.patch<{ coupon: string }>(`/coupons/${placeId}`)

  return data.coupon
}
