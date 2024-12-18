import { useQuery } from '@tanstack/react-query'
import { fetchCategories } from '../fetch-categories'

export function useFetchCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Number.POSITIVE_INFINITY,
  })
}
