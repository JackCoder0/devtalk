import { Ellipsis } from 'lucide-react'

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  text?: string
  src?: string
}

export const Card: React.FC<ButtonProps> = ({ text, title, src, ...props }) => {
  return (
    <div
      className="border-primary bg-background hover:bg-primary hover:border-secondary h-[217px] w-[200px] cursor-pointer rounded-2xl border-2 border-b-5 transition-all hover:text-white"
      {...props}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-10">
        <img src={src} alt="Imagem do Idioma" />
        <span className="font-inter font-semibold">{title}</span>
        <span className="font-inter">{text}</span>
      </div>
    </div>
  )
}

export const CardV2: React.FC<ButtonProps> = ({
  text,
  title,
  src,
  ...props
}) => {
  return (
    <div
      className="flex w-[250px] flex-col overflow-hidden rounded-2xl border-2 border-[#333333]"
      {...props}
    >
      <div className="flex items-center justify-between border-b-2 border-[#333333] bg-[linear-gradient(151.84deg,#000000_1.26%,#181818_50.63%,#000000_100%)] p-5">
        <span className="font-inter text-lg font-semibold text-white">
          {title}
        </span>
        <Ellipsis className="text-primary" size={25} />
      </div>

      <img src={src} alt="Imagem do Idioma" className="" />

      <div className="flex items-center justify-center border-t-2 border-[#333333] bg-[linear-gradient(151.84deg,#000000_1.26%,#181818_50.63%,#000000_100%)] p-5">
        <span className="font-inter text-lg text-white">{text}</span>
      </div>
    </div>
  )
}
