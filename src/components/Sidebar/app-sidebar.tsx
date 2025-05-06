import { Code2, SettingsIcon, User } from 'lucide-react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { NavMain } from '@/components/Sidebar/nav-main'
// import { NavProjects } from '@/components/Sidebar/nav-projects'
// import { NavSecondary } from '@/components/Sidebar/nav-secondary'
import { NavUser } from '@/components/Sidebar/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarHeader,
  // SidebarMenu,
  // SidebarMenuButton,
  // SidebarMenuItem,
} from '@/components/ui/sidebar'

import { NavSecondary } from './nav-secondary'

const data = {
  navMain: [
    {
      title: 'Aprender',
      url: '/dashboard',
      icon: Code2,
      isActive: true,
    },
    // {
    //   title: 'Perfil',
    //   url: '/dashboard/profile',
    //   icon: User,
    // },
  ],
  navSecondary: [
    {
      title: 'Configurações',
      url: '/dashboard/settings',
      icon: SettingsIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <div className="bg-sidebar-primary flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Code2 className="size-6" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">DevTalk</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
