import { Signal, SignalHigh, SignalLow, SignalMedium } from 'lucide-react'

import Mascote2D from '@/assets/Mascote 2D.svg'

import { Button } from '../Button'
import { TooltipV2 } from '../Tooltip'

const levelLanguageButtons = [
  { label: 'Conheço algumas palavras comuns', icon: <SignalLow size={25} /> },
  {
    label: 'Consigo ter conversar simples',
    icon: <SignalMedium size={25} />,
  },
  {
    label: 'Consigo falar de assuntos variados',
    icon: <SignalHigh size={25} />,
  },
  {
    label: 'Consigo falar sobre a maioria dos assuntos em detalhe',
    icon: <Signal size={25} />,
  },
]

export const StepFour = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-10 left-10">
        <div className="flex items-center justify-center gap-3">
          <img className="w-[12rem]" src={Mascote2D} alt="Mascote do DevTalk" />
          <TooltipV2 tooltipText={['Quanto você entende de inglês?']} />
        </div>
      </div>

      <div className="mt-10 flex w-[650px] flex-col gap-4">
        {levelLanguageButtons.map(({ label, icon }) => (
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
