import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface User {
  id: string // uid do Firebase
  name: string
  email: string
  photo_url: string | null
  auth_provider: string
  age: number
  xp: number
  english_level: string
  created_at: string
  streak: number
  life: number
  level: number
}

export interface Main {
  user: User
  token: string
}

interface AuthState {
  user: Main | null
  token: string | null
  setAuth: (user: Main, token: string) => void
  logout: () => void
  updateXP: (newXP: number, newLevel: number) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setAuth: (user, token) => set({ user, token }),

      logout: () => {
        set({ user: null, token: null })
        sessionStorage.clear()
      },

      updateXP: (newXP, newLevel) => {
        set((state) => {
          if (state.user) {
            return {
              user: {
                ...state.user,
                user: {
                  ...state.user.user,
                  xp: newXP,
                  level: newLevel,
                },
              },
            }
          }
          return state
        })
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
