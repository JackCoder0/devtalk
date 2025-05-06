// import { zodResolver } from '@hookform/resolvers/zod'
// import { Alert } from '@mui/material'
// // import { useMutation } from '@tanstack/react-query'
// import {
//   AuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
// } from 'firebase/auth'
// import { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { useForm } from 'react-hook-form'
// import { FaGithub, FaGoogle } from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom'
// import { z } from 'zod'

// // import { login } from '@/api/Auth/login'
// // import { signUp } from '@/api/Auth/signup'
// import { BreakLine } from '@/components/BreakLine'
// import { Button } from '@/components/Button'
// import { Input } from '@/components/Input'
// import { auth, githubProvider, googleProvider } from '@/lib/firebase'

// const signUpSchema = z.object({
//   age: z.coerce
//     .number({ invalid_type_error: 'A idade deve ser um número.' })
//     .min(13, 'Você precisa ter pelo menos 13 anos.')
//     .max(120, 'Idade inválida.'),
//   name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
//   email: z.string().email('Digite um e-mail válido.'),
//   password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
//   authProvider: z.enum(['email', 'google', 'github']),
// })

// type SignUpFormData = z.infer<typeof signUpSchema>

// export function SignUp() {
//   const navigate = useNavigate()
//   const [errorMessage, setErrorMessage] = useState<string>('')

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm<SignUpFormData>({
//     resolver: zodResolver(signUpSchema),
//     defaultValues: {
//       authProvider: 'email',
//     },
//   })

//   const onSubmit = async (data: SignUpFormData) => {
//     setErrorMessage('')

//     try {
//       if (data.authProvider === 'email') {
//         await createUserWithEmailAndPassword(auth, data.email, data.password)
//         navigate('/dashboard')
//       } else {
//         const provider: AuthProvider =
//           data.authProvider === 'google' ? googleProvider : githubProvider
//         await signInWithPopup(auth, provider)
//         navigate('/dashboard')
//       }
//     } catch (error: any) {
//       setErrorMessage(error.message || 'Erro ao realizar cadastro!')
//     }
//   }

//   return (
//     <>
//       <Helmet title="Criar Conta" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex w-[350px] flex-col gap-4"
//       >
//         <h1 className="text-center text-2xl font-semibold">Crie a sua conta</h1>
//         <Input
//           type="number"
//           placeholder="Idade"
//           {...register('age', { valueAsNumber: true })}
//           error={errors.age?.message}
//         />
//         <Input
//           type="text"
//           placeholder="Nome"
//           {...register('name')}
//           error={errors.name?.message}
//         />
//         <Input
//           type="email"
//           placeholder="E-mail"
//           {...register('email')}
//           error={errors.email?.message}
//         />
//         <Input
//           type="password"
//           placeholder="Senha"
//           {...register('password')}
//           error={errors.password?.message}
//         />

//         {errorMessage && (
//           <Alert variant="filled" severity="error">
//             {errorMessage}
//           </Alert>
//         )}

//         <Button type="submit" text="Criar Conta" className="w-full" />

//         <div className="flex flex-col gap-1">
//           <BreakLine text="OU" />

//           <div className="flex w-full items-center justify-center gap-10">
//             <Button
//               type="button"
//               variant="outline"
//               text="GitHub"
//               icon={<FaGithub size={20} />}
//               onClick={() => {
//                 setValue('authProvider', 'github')
//                 handleSubmit(onSubmit)()
//               }}
//             />
//             <Button
//               type="button"
//               variant="outline"
//               text="Google"
//               icon={<FaGoogle size={20} />}
//               onClick={() => {
//                 setValue('authProvider', 'google')
//                 handleSubmit(onSubmit)()
//               }}
//             />
//           </div>

//           <p className="text-text mt-3.5 text-center text-sm font-semibold">
//             Ao entrar no DevTalk, você concorda com os nossos{' '}
//             <a className="text-primary" href="#">
//               Termos
//             </a>{' '}
//             e{' '}
//             <a className="text-primary" href="#">
//               Política de Privacidade
//             </a>
//             .
//           </p>
//         </div>
//       </form>
//     </>
//   )
// }

import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from '@mui/material'
import {
  AuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { BreakLine } from '@/components/BreakLine'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { auth, githubProvider, googleProvider } from '@/lib/firebase'

const signUpSchema = z.object({
  age: z.coerce
    .number({ invalid_type_error: 'A idade deve ser um número.' })
    .min(13, 'Você precisa ter pelo menos 13 anos.')
    .max(120, 'Idade inválida.'),
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  email: z.string().email('Digite um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
  authProvider: z.enum(['email', 'google', 'github']),
})

type SignUpFormData = z.infer<typeof signUpSchema>

export function SignUp() {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      authProvider: 'email',
    },
  })

  const onSubmit = async (data: SignUpFormData) => {
    setErrorMessage('')

    try {
      if (data.authProvider === 'email') {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
        navigate('/dashboard')
      } else {
        const provider: AuthProvider =
          data.authProvider === 'google' ? googleProvider : githubProvider
        await signInWithPopup(auth, provider)
        navigate('/dashboard')
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Erro ao realizar cadastro!')
    }

    console.log(data)
  }

  return (
    <>
      <Helmet title="Criar Conta" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[350px] flex-col gap-4"
      >
        <h1 className="text-center text-2xl font-semibold">Crie a sua conta</h1>
        <Input
          type="number"
          placeholder="Idade"
          {...register('age', { valueAsNumber: true })}
          error={errors.age?.message}
        />
        <Input
          type="text"
          placeholder="Nome"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          error={errors.password?.message}
        />

        {errorMessage && (
          <Alert variant="filled" severity="error">
            {errorMessage}
          </Alert>
        )}

        <Button type="submit" text="Criar Conta" className="w-full" />

        <div className="flex flex-col gap-1">
          <BreakLine text="OU" />

          <div className="flex w-full items-center justify-center gap-10">
            <Button
              type="button"
              variant="outline"
              text="GitHub"
              icon={<FaGithub size={20} />}
              onClick={() => {
                setValue('authProvider', 'github')
                handleSubmit(onSubmit)()
              }}
            />
            <Button
              type="button"
              variant="outline"
              text="Google"
              icon={<FaGoogle size={20} />}
              onClick={() => {
                setValue('authProvider', 'google')
                handleSubmit(onSubmit)()
              }}
            />
          </div>

          <p className="text-text mt-3.5 text-center text-sm font-semibold">
            Ao entrar no DevTalk, você concorda com os nossos{' '}
            <a className="text-primary" href="#">
              Termos
            </a>{' '}
            e{' '}
            <a className="text-primary" href="#">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </form>
    </>
  )
}
