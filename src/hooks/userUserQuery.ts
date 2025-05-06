import { useQuery } from '@tanstack/react-query'

import { getUserData } from '@/services/getUserData'

export function useUserQuery(uid: string | null) {
  return useQuery({
    queryKey: ['user', uid],
    queryFn: () => {
      if (!uid) throw new Error('UID não fornecido')
      return getUserData(uid)
    },
    enabled: !!uid, // só roda se UID existir
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}
