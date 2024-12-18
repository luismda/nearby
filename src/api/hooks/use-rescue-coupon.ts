import { addUsedCoupon } from '@/storage'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { rescueCoupon } from '../rescue-coupon'

export function useRescueCoupon() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: rescueCoupon,
    onSuccess: async (_, placeId) => {
      await addUsedCoupon(placeId)

      return Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['used-coupons', placeId],
        }),
        queryClient.invalidateQueries({
          queryKey: ['place', placeId],
        }),
      ])
    },
  })
}
