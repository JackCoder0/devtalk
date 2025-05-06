import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from './stores/useAuthStore'

export function ProtectedRoute() {
  const { token } = useAuthStore()

  if (!token) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
