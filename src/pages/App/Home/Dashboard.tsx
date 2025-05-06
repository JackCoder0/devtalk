import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { LessonCard } from '@/components/LessonCard'
import { Skeleton } from '@/components/ui/skeleton'
import { mockLesson } from '@/mocks/mockLesson'
import {
  addLesson,
  getCompletedLessons,
  getLessons,
} from '@/services/firebaseLessons'
import { useAuthStore } from '@/stores/useAuthStore'

// TODO: Adicionar sistema de regeneração para as vidas

export function Dashboard() {
  const { user } = useAuthStore()
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const { data: lessons, isLoading } = useQuery({
    queryKey: ['lessons'],
    queryFn: getLessons,
  })

  useEffect(() => {
    const fetchCompletedLessons = async () => {
      if (user && lessons) {
        try {
          const completed = await getCompletedLessons(user.user.id)
          setCompletedLessons(completed)
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchCompletedLessons()
  }, [user, lessons])

  const handleAddLesson = async () => {
    await addLesson(mockLesson)
  }

  return (
    <>
      <Helmet title="Dashboard" />

      {/* <button
        onClick={handleAddLesson}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Adicionar Lição ao Firestore
      </button> */}

      <div className="flex w-full items-center justify-center">
        {isLoading ? (
          <div className="mx-auto flex items-center justify-center py-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              {Array.from({ length: 15 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[450px] w-[300px] max-w-lg rounded-xl"
                />
              ))}
            </div>
          </div>
        ) : (
          lessons && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              {lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.lesson_id)
                const userXp = user?.user.xp || 0
                return (
                  <div
                    key={lesson.lesson_id}
                    className="flex items-center justify-center p-5"
                  >
                    <LessonCard
                      titleCard={lesson.title}
                      questions={lesson.questions.length}
                      xpAward={lesson.xp_reward}
                      levelCard={lesson.level}
                      idCard={lesson.lesson_id}
                      xpUnlock={lesson.xp_unlock}
                      isDisabled={!(userXp >= lesson.xp_unlock)}
                      progress={isCompleted ? 100 : 0}
                    />
                  </div>
                )
              })}
            </div>
          )
        )}
      </div>
    </>
  )
}
