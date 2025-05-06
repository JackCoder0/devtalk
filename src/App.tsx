import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider.tsx'
import { queryClient } from './lib/react-query.ts'
import { router } from './Routes'

// TODO: Deixar responsivo para diversas telas
// TODO: Adicionar mais lições
// TODO: Criar cadastro
// TODO: Adicionar Skeleton

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="devtalk-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | DevTalk" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
