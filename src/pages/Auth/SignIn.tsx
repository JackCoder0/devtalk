import { Helmet } from 'react-helmet-async'

import { LoginForm } from '@/components/login-form'

export function SignIn() {
  return (
    <div className="flex max-w-[400px] flex-col items-center justify-center gap-4">
      <Helmet title="Login" />

      <LoginForm />
    </div>
  )
}
