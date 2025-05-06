import { Outlet } from 'react-router-dom'

import { AppSidebar } from '@/components/Sidebar/app-sidebar'
import { SiteHeader } from '@/components/Sidebar/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export function DashLayout() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            {/* <div className="flex-1 p-8"> */}
            <Outlet />
            {/* </div> */}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
