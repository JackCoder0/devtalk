import { z } from 'zod'

const envSchema = z.object({
  VITE_FIREBASE_API_KEY: z.string(),
  VITE_FIREBASE_AUTH_DOMAIN: z.string(),
  VITE_FIREBASE_PROJECT_ID: z.string(),
  VITE_FIREBASE_STORAGE_BUCKET: z.string(),
  VITE_FIREBASE_MESSAGING_SENDER_ID: z.string(),
  VITE_FIREBASE_APP_ID: z.string(),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error('❌ Erro nas variáveis de ambiente:', _env.error.format())
  throw new Error('Variáveis de ambiente inválidas')
}

export const env = _env.data
