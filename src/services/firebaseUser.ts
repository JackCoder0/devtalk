import { User } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'

import { db } from '@/lib/firebase'

export async function createUserIfNotExists(user: User) {
  const userRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || 'DevTalker',
      email: user.email,
      photoURL: user.photoURL || null,
      level: 0,
      xp: 0,
      englishLevel: 'A1', // A1, A2, B1, B2, C1, C2
      dailyGoal: 0,
      life: 10,
      createdAt: serverTimestamp(),
    })
  }
}
