import Mascote2D from '@/assets/Mascote 2D.svg'

import { TooltipV2 } from '../Tooltip'

export const Start = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <TooltipV2 tooltipText={['Olá! Eu sou a Nyx!']} />
      <img className="w-[18rem]" src={Mascote2D} alt="Mascote do DevTalk" />
    </div>
  )
}
