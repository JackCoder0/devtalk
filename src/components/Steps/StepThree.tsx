import {
  Ellipsis,
  LucideBrainCircuit,
  LucidePartyPopper,
  UserRoundPlus,
} from 'lucide-react'
import { FaCode } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'

import Mascote2D from '@/assets/Mascote 2D.svg'

import { Button } from '../Button'
import { TooltipV2 } from '../Tooltip'

const socialMediaButtons = [
  { label: 'Progredir na carreira', icon: <FaCode size={25} /> },
  { label: 'Diversão', icon: <LucidePartyPopper size={25} /> },
  { label: 'Conhecer pessoas', icon: <UserRoundPlus size={25} /> },
  { label: 'Avançar nos estudos', icon: <LucideBrainCircuit size={25} /> },
  { label: 'Viajar', icon: <GiCommercialAirplane size={25} /> },
  { label: 'Outros', icon: <Ellipsis size={25} /> },
]

export const StepThree = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-10 left-10">
        <div className="flex items-center justify-center gap-3">
          <img className="w-[12rem]" src={Mascote2D} alt="Mascote do DevTalk" />
          <TooltipV2 tooltipText={['Você quer aprender inglês para...']} />
        </div>
      </div>

      <div className="mt-10 grid w-[650px] grid-cols-4 grid-rows-5 gap-4">
        {socialMediaButtons.map(({ label, icon }) => (
          <div key={label} className="col-span-2 row-span-5">
            <Button
              key={label}
              variant="outline"
              text={label}
              iconSide="left"
              icon={icon}
              className="h-[70px] w-full"
              type="button"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
