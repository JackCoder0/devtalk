import { SidebarIcon, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

// import { SearchForm } from '@/components/Sidebar/search-form'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useSidebar } from '@/components/ui/sidebar'
import { router } from '@/Routes'
import { capitalizeFirstLetter } from '@/utils/capitalize'

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const routeNameMap = (Array.isArray(router) ? router : []).reduce(
    (acc: Record<string, string>, route: { path: string; name: string }) => {
      acc[route.path] = route.name
      return acc
    },
    {} as Record<string, string>,
  )

  const generateBreadcrumbs = () => {
    const breadcrumbs = [{ label: 'DevTalk', to: '/dashboard' }]
    const pathParts = currentPath.split('/').filter(Boolean)

    pathParts.forEach((part, index) => {
      const routePath = `/${pathParts.slice(0, index + 1).join('/')}`
      const nameKey = routeNameMap[routePath]
      const label = nameKey
        ? capitalizeFirstLetter(nameKey)
        : capitalizeFirstLetter(part)
      breadcrumbs.push({
        label,
        to: routePath,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <Breadcrumb className="hidden sm:block">
              <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                  <BreadcrumbItem key={breadcrumb.to}>
                    <BreadcrumbLink>
                      <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                    </BreadcrumbLink>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </BreadcrumbList>
        </Breadcrumb>

        {/* <SearchForm className="w-full sm:ml-auto sm:w-auto" /> */}
      </div>
      <div className="flex items-center gap-1">
        <Sparkles className="text-muted-foreground" size={20} />
        <p className="text-sm">Em breve novas features</p>
      </div>
    </header>
  )
}
