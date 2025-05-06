import Mascote2D from '@/assets/Mascote 2D.svg'

import { TooltipV2 } from '../Tooltip'

export const StepOne = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <TooltipV2 tooltipText={['Vamos começar a festa!']} />
      <img className="w-[18rem]" src={Mascote2D} alt="Mascote do DevTalk" />
    </div>
  )
}
