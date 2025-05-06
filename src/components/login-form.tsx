import { zodResolver } from '@hookform/resolvers/zod'
import { Alert, CircularProgress } from '@mui/material'
import {
  fetchSignInMethodsForEmail,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { auth, githubProvider, googleProvider } from '@/lib/firebase'
import { cn } from '@/lib/utils'
import { createUserIfNotExists } from '@/services/firebaseUser'
import { getUserData } from '@/services/getUserData'
import { useAuthStore } from '@/stores/useAuthStore'

const loginFormSchema = z.object({
  user: z.string().min(3, 'O usuário deve ter no mínimo 3 caracteres.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
})

type LoginForm = z.infer<typeof loginFormSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const setAuth = useAuthStore((state) => state.setAuth)

  // #region ZOD/REACT-HOOK-FORM
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  })
  // #endregion

  const onSubmit = async (data: LoginForm) => {
    setErrorMessage('')
    setLoading(true)

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        data.user,
        data.password,
      )
      const firebaseUser = result.user

      await createUserIfNotExists(firebaseUser)

      const user = await getUserData(firebaseUser.uid)
      const token = await firebaseUser.getIdToken()

      setAuth({ user, token }, token)

      navigate('/dashboard')
    } catch (error: any) {
      setErrorMessage('Usuário ou senha inválidos.')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = async (
    provider: GoogleAuthProvider | GithubAuthProvider,
  ) => {
    try {
      const result = await signInWithPopup(auth, provider)
      const firebaseUser = result.user

      await createUserIfNotExists(firebaseUser)

      const user = await getUserData(firebaseUser.uid)
      const token = await firebaseUser.getIdToken()

      setAuth({ user, token }, token)

      navigate('/dashboard')
    } catch (error: any) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.customData.email

        GoogleAuthProvider.credentialFromError(error) ||
          GithubAuthProvider.credentialFromError(error)

        const methods = await fetchSignInMethodsForEmail(auth, email)

        if (methods.includes('password')) {
          setErrorMessage(
            'Este e-mail já está vinculado a uma conta com senha. Faça login com e-mail e senha.',
          )
        } else if (methods.includes('google.com')) {
          setErrorMessage('Este e-mail já está vinculado ao login com Google.')
        } else if (methods.includes('github.com')) {
          setErrorMessage('Este e-mail já está vinculado ao login com GitHub.')
        } else {
          setErrorMessage('Conta já existe com outro método de login.')
        }
      } else {
        setErrorMessage('Ocorreu um erro ao tentar fazer login.')
        console.error(error)
      }
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Bem-Vindo de volta!</CardTitle>
          <CardDescription>
            Login com sua conta GitHub ou Google
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="E-mail ou nome de usuário"
                    {...register('user')}
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                      to="/esqueceu-senha"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...register('password')}
                  />
                </div>

                {errorMessage && (
                  <Alert variant="filled" severity="error">
                    {errorMessage}
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full cursor-pointer text-white"
                >
                  {loading ? (
                    <CircularProgress color="inherit" size="2rem" />
                  ) : (
                    'Entrar'
                  )}
                </Button>
              </div>
            </div>
          </form>

          <div className="after:border-border relative my-5 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Ou login com
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin(githubProvider)}
            >
              <FaGithub />
              Login com GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin(googleProvider)}
            >
              <FaGoogle />
              Login com Google
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Ainda não tem uma conta?{' '}
            <a href="#" className="underline underline-offset-4">
              Criar conta
            </a>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Ao clicar em continuar, você concorda com nossos{' '}
        <a href="#">ermos de Serviço</a> e{' '}
        <a href="#">Política de Privacidade</a>.
      </div>
    </div>
  )
}
