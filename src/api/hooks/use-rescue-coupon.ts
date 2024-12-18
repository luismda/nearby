import { useMutation, useQueryClient } from '@tanstack/react-query'
import { rescueCoupon } from '../rescue-coupon'

export function useRescueCoupon() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: rescueCoupon,
    onSuccess: placeId => {
      return queryClient.invalidateQueries({
        queryKey: ['place', placeId],
      })
    },
  })
}
