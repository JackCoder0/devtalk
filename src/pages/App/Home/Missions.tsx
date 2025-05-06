import { Helmet } from 'react-helmet-async'

import { LessonCard } from '@/components/LessonCard'

export function Missions() {
  const lessonCards = new Array(12).fill(null)

  return (
    <>
      <Helmet title="Missões" />
      <div className="grid grid-cols-4 gap-5">
        {lessonCards.map((_, index) => (
          <div key={index} className="flex items-center justify-center p-5">
            <LessonCard
              titleCard="Sprint 1: Título aqui"
              questions={15}
              xpAward={500}
              levelCard={index + 1}
              xpUnlock={200}
              progress={89 + index}
            />
          </div>
        ))}
      </div>
    </>
  )
}
