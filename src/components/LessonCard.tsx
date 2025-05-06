import { ArrowUp, ChevronRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaUnlockAlt } from 'react-icons/fa'
import { PiTreasureChestBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import img from '@/assets/sprint_img.jpeg'

import { CircularProgressColorDemo } from './progress-circular'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter } from './ui/card'
import { Separator } from './ui/separator'

export interface LessonCardProps {
  titleCard: string
  questions: number
  xpAward: number
  levelCard: number | string
  isDisabled?: boolean
  xpUnlock?: number
  progress?: number
  rewardRedeemed?: boolean
  idCard: number
}

export const LessonCard: React.FC<LessonCardProps> = ({
  isDisabled,
  xpUnlock,
  progress = 0,
  rewardRedeemed = false,
  titleCard,
  questions,
  xpAward,
  levelCard,
  idCard,
}) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [rewardClaimed, setRewardClaimed] = useState<boolean>(rewardRedeemed)
  const navigate = useNavigate()

  useEffect(() => {
    setIsComplete(progress >= 100)
  }, [progress])

  const handleRewardClaim = () => {
    setRewardClaimed(true)
    toast.success('Recompensa resgatada com sucesso!')
  }

  const handleLessonStart = () => {
    navigate(`/lesson/${idCard}`)
  }

  return (
    <Card className="relative w-full max-w-lg shadow-none">
      {/* Backdrop quando desativado */}
      {isDisabled && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-xl bg-black/80">
          <FaUnlockAlt size={80} className="text-primary" />
          <p className="font-jura text-[1.5rem] font-bold">
            XP necessário: <b className="text-amber-400">{xpUnlock}</b>
          </p>
          <p className="font-jura text-center font-bold">
            Complete a Sprint anterior para continuar!
          </p>
        </div>
      )}

      <CardContent className="p-0">
        <img
          src={img}
          className="border-y object-contain"
          alt={`Imagem da lição ${titleCard}`}
        />
        <div className="px-4 pt-3">
          <h2 className="mb-1 font-semibold">{titleCard}</h2>
          <p className="text-sm">Questões: {questions}</p>

          <div className="flex items-center justify-center gap-5 pt-4">
            <Badge
              variant="outline"
              className="flex items-center gap-2 text-xs md:text-sm"
            >
              <ArrowUp className="text-primary" />
              <span>XP: {xpAward}</span>
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-2 text-xs md:text-sm"
            >
              <Sparkles className="text-primary" />
              <span>LVL: {levelCard}</span>
            </Badge>
          </div>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex items-center justify-center">
        {!rewardClaimed ? (
          <>
            <Button
              variant="ghost"
              className="text-muted-foreground"
              onClick={isComplete ? handleRewardClaim : handleLessonStart}
            >
              {isComplete ? (
                <>
                  <span className="hidden sm:inline">Recompensa</span>
                  <PiTreasureChestBold />
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Começar</span>
                  <ChevronRight />
                </>
              )}
            </Button>
            <CircularProgressColorDemo value={progress} />
          </>
        ) : (
          <div className="flex flex-grow justify-center">
            <CircularProgressColorDemo value={progress} />
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
