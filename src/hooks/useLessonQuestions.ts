import { useQuery } from '@tanstack/react-query'

import { getLesson } from '@/api/Lesson/getLesson'

export function useLesson(lessonId: number) {
  return useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: () => getLesson({ lessonId }),
    enabled: !!lessonId,
  })
}
