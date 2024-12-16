import { api } from '@/lib/axios'

export interface FetchPlacesResponse {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
  latitude: number
  longitude: number
}

export async function fetchPlaces(categoryId: string) {
  const { data } = await api.get<FetchPlacesResponse[]>(`/markets/category/${categoryId}`)

  return data
}
