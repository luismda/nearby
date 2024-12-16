import { api } from '@/lib/axios'

export interface GetPlaceResponse {
  id: string
  name: string
  cover: string
  description: string
  address: string
  phone: string
  coupons: number
  rules: {
    id: string
    description: string
  }[]
}

export async function getPlace(placeId: string) {
  const { data } = await api.get<GetPlaceResponse>(`/markets/${placeId}`)

  return data
}
