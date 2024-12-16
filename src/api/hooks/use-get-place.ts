import { useQuery } from '@tanstack/react-query'
import { getPlace } from '../get-place'

export function useGetPlace(placeId: string) {
  return useQuery({
    enabled: !!placeId,
    queryKey: ['place', placeId],
    queryFn: () => getPlace(placeId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
