import { api } from '@/lib/axios'

export interface FetchCategoriesResponse {
  id: string
  name: string
}

export async function fetchCategories() {
  const { data } = await api.get<FetchCategoriesResponse[]>('/categories')

  return data
}
