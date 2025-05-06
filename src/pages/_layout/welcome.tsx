import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export function WelcomeLayout() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Helmet title="Bem-Vindo" />
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
