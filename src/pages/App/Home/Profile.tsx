import { Avatar, CircularProgress } from '@mui/material'
import { format } from 'date-fns'
import { Helmet } from 'react-helmet-async'
import { GoZap } from 'react-icons/go'

import { useAuthStore } from '@/stores/useAuthStore'

export function Profile() {
  const { user } = useAuthStore()

  return (
    <div className="flex flex-col gap-10">
      <Helmet title="Perfil" />
      <div className="flex items-center justify-center gap-10">
        <div className="border-primary flex h-[420px] w-[420px] flex-col items-center justify-center gap-4 rounded-[10px] border-2">
          <div className="flex flex-col items-center gap-5">
            <div className="relative inline-flex items-center justify-center">
              <CircularProgress
                variant="determinate"
                value={50}
                size={120}
                thickness={2}
                sx={{
                  position: 'absolute',
                }}
              />

              <Avatar
                sx={{ width: 100, height: 100 }}
                src={user?.user.photo_url || ''}
              />
            </div>

            <p className="font-jura border-primary text-primary rounded-[4px] border-2 p-1 font-bold">
              LVL: {user?.user.level || 0}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p>{user?.user.name || 'Usuário'}</p>
            <p>
              Desde{' '}
              {user?.user.created_at
                ? format(new Date(user.user.created_at), 'dd/MM/yyyy')
                : format(new Date(), 'dd/MM/yyyy')}
            </p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="border-primary flex aspect-square min-h-20 w-50 flex-col items-center justify-center gap-4 rounded-[10px] border-2"
              >
                <div className="flex flex-col items-center gap-3 leading-none">
                  <GoZap size={40} color="#e9941d" />
                  <p className="font-jura font-bold">
                    XP: {user?.user.streak || 1000}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Conquistas */}
      <div className="flex items-center justify-center gap-10">
        <div className="border-primary rounded-2xl border-2">
          <div className="grid grid-cols-3 gap-5 p-10">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="border-primary flex aspect-square min-h-20 w-50 flex-col items-center justify-center gap-4 rounded-[10px] border-2"
                >
                  <div className="flex flex-col items-center gap-3 leading-none">
                    <GoZap size={40} color="#e9941d" />
                    <p className="font-jura text-center font-bold">
                      Conquista: Nome da Conquista
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
