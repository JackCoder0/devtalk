import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function AppLayout() {
  return (
    <div className="flex h-screen w-full flex-col px-13">
      <Header />

      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
