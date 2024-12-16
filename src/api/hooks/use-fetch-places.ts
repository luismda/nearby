import { useQuery } from '@tanstack/react-query'
import { fetchPlaces } from '../fetch-places'

export function useFetchPlaces(categoryId: string | null) {
  return useQuery({
    enabled: !!categoryId,
    queryKey: ['places', categoryId],
    queryFn: () => fetchPlaces(categoryId ?? ''),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
