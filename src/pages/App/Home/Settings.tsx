import { Separator } from '@radix-ui/react-dropdown-menu'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { SidebarNav } from '@/components/Settings/sidebar-nav'

const sidebarNavItems = [
  // { title: 'Perfil', href: '/dashboard/settings/profile' },
  // { title: 'Account', href: '/settings/account' },
  { title: 'Aparência', href: '/dashboard/settings/appearance' },
  { title: 'Em breve novas features', href: '#' },
  // { title: 'Notifications', href: '/settings/notifications' },
  // { title: 'Display', href: '/settings/display' },
]

export function Settings() {
  return (
    <>
      <Helmet title="Configurações" />

      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
          <p className="text-muted-foreground">
            Gerencie as configurações da sua conta e defina as preferências de
            e-mail.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
          <aside className="mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
