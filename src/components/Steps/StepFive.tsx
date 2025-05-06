import Mascote2D from '@/assets/Mascote 2D.svg'

import { Button } from '../Button'
import { TooltipV2 } from '../Tooltip'

const goalTimeButtons = [
  {
    label: '5 min/dia',
    secondLabel: 'Casual',
  },
  {
    label: '10 min/dia',
    secondLabel: 'Regular',
  },
  {
    label: '15 min/dia',
    secondLabel: 'Intenso',
  },
  {
    label: '20 min/dia',
    secondLabel: 'Puxado',
  },
]

export const StepFive = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-10 left-10">
        <div className="flex items-center justify-center gap-3">
          <img className="w-[12rem]" src={Mascote2D} alt="Mascote do DevTalk" />
          <TooltipV2 tooltipText={['Qual vai ser a sua meta diária?']} />
        </div>
      </div>

      <div className="mt-10 flex w-[650px] flex-col gap-4">
        {goalTimeButtons.map(({ label, secondLabel }) => (
          <div key={label} className="col-span-2 row-span-5">
            <Button
              variant="outline"
              text={label}
              subText={secondLabel}
              className="h-[70px] w-full"
              type="button"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
