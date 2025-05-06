import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore'

import { db } from '@/lib/firebase'
import { useAuthStore } from '@/stores/useAuthStore'
import { calculateLevelAndXP } from '@/utils/xpFunction'

export interface Question {
  question_id: number
  lesson_id: number
  question_text: string
  // type: 'multiple_choice' | 'true_false' | 'fill_in_the_blank'
  type: string
  correct_answer: string
  options: string[]
  explanation: string
}

export interface Lesson {
  lesson_id: number
  title: string
  description: string
  level: string
  xp_reward: number
  xp_unlock: number
  questions: Question[]
}

export async function addLesson(lesson: Lesson) {
  try {
    const lessonsRef = collection(db, 'lessons')
    const lessonDoc = doc(lessonsRef, lesson.lesson_id.toString())

    await setDoc(lessonDoc, lesson)

    console.log('Lição adicionada com sucesso!')
  } catch (error) {
    console.error('Erro ao adicionar lição:', error)
  }
}

export async function getLessons(): Promise<Lesson[]> {
  const lessonCol = collection(db, 'lessons')
  const lessonSnapshot = await getDocs(lessonCol)
  const lessonList = lessonSnapshot.docs.map((doc) => doc.data() as Lesson)
  return lessonList
}

export async function getLesson(lessonId: string): Promise<Lesson | null> {
  try {
    const lessonDoc = doc(db, 'lessons', lessonId)
    const lessonSnapshot = await getDoc(lessonDoc)

    if (lessonSnapshot.exists()) {
      return lessonSnapshot.data() as Lesson
    } else {
      console.error('Lição não encontrada!')
      return null
    }
  } catch (error) {
    console.error('Erro ao buscar a lição:', error)
    return null
  }
}

export const completeLesson = async (userId: string, lesson: Lesson) => {
  const userRef = doc(db, 'users', userId)
  const userSnap = await getDoc(userRef)

  const userProgressRef = doc(db, 'user_progress', userId)
  const userProgressSnap = await getDoc(userProgressRef)

  const currentXP =
    userSnap.exists() && userSnap.data()?.xp ? userSnap.data().xp : 0
  const currentLevel = userSnap.exists() ? (userSnap.data().level ?? 0) : 0

  const totalXP = currentXP + lesson.xp_reward
  const { xp: updatedXP, level: newLevel } = calculateLevelAndXP(
    totalXP,
    currentLevel,
  )

  console.log('Level atual:', currentLevel)
  console.log('XP Atual:', currentXP)

  console.log('XP ganho:', lesson.xp_reward)
  console.log('XP total:', totalXP)

  console.log('Novo nível:', newLevel)
  console.log('Novo XP:', updatedXP)

  // Atualizando o progresso do usuário no Firestore
  if (userProgressSnap.exists()) {
    await updateDoc(userProgressRef, {
      completedLessons: arrayUnion(lesson.lesson_id),
    })
  } else {
    await setDoc(userProgressRef, {
      completedLessons: [lesson.lesson_id],
    })
  }

  // Atualizando o XP e nível no Firestore
  await updateDoc(userRef, {
    xp: updatedXP,
    level: newLevel,
  })

  // Atualizando o estado global no Zustand com o novo XP e nível
  useAuthStore.getState().updateXP(updatedXP, newLevel)
}

export const getCompletedLessons = async (userId: string) => {
  const userProgressRef = doc(db, 'user_progress', userId)
  const userProgressSnap = await getDoc(userProgressRef)

  if (userProgressSnap.exists()) {
    return userProgressSnap.data().completedLessons || []
  } else {
    console.error('Progresso do usuário não encontrado!')
    return []
  }
}
