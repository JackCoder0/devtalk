import { ReactNode } from 'react'

interface TechIconsProps {
  icon: ReactNode
}

export const TechIcons: React.FC<TechIconsProps> = ({ icon }) => {
  return (
    <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#0C2958] shadow-[inset_5px_5px_10px_5px_#00000050]">
      {icon}
    </div>
  )
}
