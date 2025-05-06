import { FaLaptopCode, FaSignOutAlt, FaUser } from 'react-icons/fa'
// import { FaShop } from 'react-icons/fa6'
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go'
// import { PiRankingFill, PiTreasureChestDuotone } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'

import { useLogout } from '@/hooks/useLogout'
// import { useAuthStore } from '@/stores/useAuthStore'

interface SideNavProps {
  isOpen: boolean
  toggleSidebar: () => void
}

export const SideNav: React.FC<SideNavProps> = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate()
  const logout = useLogout()

  const menuItems = [
    {
      id: 1,
      label: 'Aprender',
      icon: <FaLaptopCode size={20} />,
      link: '/dashboard',
    },
    // { id: 2, label: 'Ranking', icon: <PiRankingFill size={20} />, link: '#' },
    // {
    //   id: 3,
    //   label: 'Missões',
    //   icon: <PiTreasureChestDuotone size={20} />,
    //   link: '/dashboard/missions',
    // },
    // { id: 4, label: 'Loja', icon: <FaShop size={20} />, link: '#' },
    {
      id: 5,
      label: 'Perfil',
      icon: <FaUser size={20} />,
      link: '/dashboard/profile',
    },
    {
      id: 6,
      label: 'Sair',
      icon: <FaSignOutAlt size={20} />,
      onClick: logout,
    },
  ]

  return (
    <div
      className={`fixed top-0 left-0 h-screen ${isOpen ? 'w-[16rem]' : 'w-[5rem]'} border-secondary bg-background z-50 border-r-2 transition-all duration-300`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          <Link
            to="/dashboard"
            className="font-jura text-primary text-[30px] font-medium"
          >
            {isOpen ? 'DevTalk' : 'DT'}
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-text border-secondary bg-background hover:bg-secondary ml-1.5 cursor-pointer rounded-md border-2 p-2 transition-all duration-200"
          >
            {isOpen ? (
              <GoSidebarExpand size={25} />
            ) : (
              <GoSidebarCollapse size={25} />
            )}
          </button>
        </div>

        <nav className="text-text mt-4 flex flex-col">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick || (() => navigate(item.link))}
              className={`hover:bg-secondary flex items-center rounded-2xl ${!isOpen ? 'justify-center' : ''} cursor-pointer gap-4 p-3`}
            >
              <span className="text-primary">{item.icon}</span>
              {isOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
