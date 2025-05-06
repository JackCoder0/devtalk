import { Ellipsis } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import {
  FaGoogle,
  FaInstagram,
  FaTiktok,
  FaTv,
  FaTwitch,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

import Mascote2D from '@/assets/Mascote 2D.svg'

import { Button } from '../Button'
import { TooltipV2 } from '../Tooltip'

const socialMediaButtons = [
  { label: 'TV', icon: <FaTv size={25} /> },
  { label: 'TikTok', icon: <FaTiktok size={25} /> },
  { label: 'Google', icon: <FaGoogle size={25} /> },
  { label: 'Twitch', icon: <FaTwitch size={25} /> },
  { label: 'WhatsApp', icon: <FaWhatsapp size={25} /> },
  { label: 'YouTube', icon: <FaYoutube size={25} /> },
  { label: 'Instagram', icon: <FaInstagram size={25} /> },
  { label: 'Outros', icon: <Ellipsis size={25} /> },
]

export const StepTwo = () => {
  const [moveDiv, setMoveDiv] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  // const [animationEnded, setAnimationEnded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMoveDiv(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleAnimationEnd = useCallback(() => {
    setShowDialog(true)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`absolute ${moveDiv ? 'slide-tl' : ''} transition-all duration-1000`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            className={`transition-all duration-1000 ${moveDiv ? 'w-[12rem]' : 'w-[18rem]'}`}
            src={Mascote2D}
            alt="Mascote do DevTalk"
          />
          {showDialog && (
            <TooltipV2 tooltipText={['Como você soube do DevTalk?']} />
          )}
        </div>
      </div>
      {showDialog && (
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
      )}
    </div>
  )
}
