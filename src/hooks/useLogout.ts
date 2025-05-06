import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { auth } from '@/lib/firebase'
import { useAuthStore } from '@/stores/useAuthStore'

export function useLogout() {
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth) // desloga do Firebase
      logout() // limpa Zustand e sessionStorage
      navigate('/') // redireciona
    } catch (error) {
      console.error('Erro ao deslogar do Firebase:', error)
    }
  }

  return handleLogout
}
