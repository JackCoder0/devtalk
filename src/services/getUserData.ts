import { doc, getDoc } from 'firebase/firestore'

import { db } from '@/lib/firebase'
import { User } from '@/stores/useAuthStore'

export async function getUserData(uid: string): Promise<User> {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    throw new Error('Usuário não encontrado.')
  }

  const data = userSnap.data()

  return {
    id: uid,
    name: data.name,
    email: data.email,
    photo_url: data.photoURL ?? null,
    auth_provider: data.auth_provider ?? 'password',
    age: data.age ?? 0,
    xp: data.xp ?? 0,
    streak: data.dailyGoal ?? 0,
    life: data.life ?? 10,
    level: data.level ?? 0,
    english_level: data.english_level ?? 'A1',
    created_at:
      data.created_at?.toDate().toISOString() ?? new Date().toISOString(),
  }
}
