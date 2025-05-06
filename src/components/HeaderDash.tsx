import { Avatar } from '@mui/material'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import SteakIcon from '@/assets/AiFillFire.svg'
import HealthIcon from '@/assets/AiFillHeart.svg'
import CoinIcon from '@/assets/BsCoin.svg'
import { useAuthStore } from '@/stores/useAuthStore'

export const HeaderDash = () => {
  const { user } = useAuthStore()

  const navigate = useNavigate()

  return (
    <header className="border-secondary bg-background border-b-2 p-4">
      <nav className="flex items-center justify-end gap-5">
        <div className="flex items-center justify-center gap-2">
          <FaStar size={30} className="text-primary" />
          <p className="font-jura font-bold">{user?.user.xp}</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <img className="w-[35px]" src={SteakIcon} alt="" />
          <p className="font-jura font-bold">{user?.user.streak}</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <img className="w-[35px]" src={CoinIcon} alt="" />
          <p className="font-jura font-bold">10</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <img className="w-[35px]" src={HealthIcon} alt="" />
          <p className="font-jura font-bold">{user?.user.life}</p>
        </div>

        <div className="rounded-full border-2">
          <Avatar
            sx={{ width: 40, height: 40, cursor: 'pointer' }}
            src={user?.user.photo_url || ''}
            alt={user?.user.name}
            onClick={() => {
              navigate('/dashboard/profile')
            }}
          />
        </div>
      </nav>
    </header>
  )
}
