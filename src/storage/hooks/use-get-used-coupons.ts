import { useQuery } from '@tanstack/react-query'
import { getUsedCoupons } from '../get-used-coupons'

export function useGetUsedCoupons(placeId: string) {
  return useQuery({
    enabled: !!placeId,
    queryKey: ['used-coupons', placeId],
    queryFn: () => getUsedCoupons(placeId),
    staleTime: Number.POSITIVE_INFINITY,
  })
}
