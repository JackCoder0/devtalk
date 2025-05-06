import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import data from '@/json/data.json'

interface CarrouselCardProps {
  nome: string
  made: string
  image: string | undefined
}

const CarrouselCard = ({ nome, made, image }: CarrouselCardProps) => {
  return (
    <div className="my-10 flex flex-col items-center">
      <div className="bg-primary flex h-[300px] w-[220px] overflow-hidden rounded-4xl">
        <img src={image} alt="" className="" />
      </div>
      <div className="mt-1 flex flex-col items-center justify-center gap-2 text-center">
        <p>{nome}</p>
        <p>{made}</p>
      </div>
    </div>
  )
}

export const Carrousel = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 3 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 3 : prev - 1))
  }

  return (
    <div className="relative my-20 flex items-center justify-center">
      <button
        onClick={prevSlide}
        className="absolute left-10 z-10 -translate-y-1/2 cursor-pointer rounded-full p-2"
        style={{ top: '50%' }}
      >
        <ChevronLeft
          size={50}
          className="hover:text-primary hover:rounded-[10px] hover:border-2"
        />
      </button>

      <div className="relative w-[740px] overflow-hidden">
        <div
          className="flex gap-9 transition-transform duration-500"
          style={{ transform: `translateX(-${current * 220}px)` }}
        >
          {data.map((person) => (
            <div key={person.id} className="min-w-[220px]">
              <CarrouselCard
                nome={person.nome}
                made={person.made}
                image={person.image}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-10 z-10 -translate-y-1/2 cursor-pointer rounded-full p-2"
        style={{ top: '50%' }}
      >
        <ChevronRight
          size={50}
          className="hover:text-primary hover:rounded-[10px] hover:border-2"
        />
      </button>
    </div>
  )
}
