import { ChevronDown } from 'lucide-react'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | ReactNode
  subText?: string
  icon?: ReactNode
  iconSide?: 'left' | 'right'
  functionButton?: React.MouseEventHandler<HTMLButtonElement>
  isSelect?: boolean
  className?: string
  variant?: 'filled' | 'outline'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  text,
  subText,
  icon,
  iconSide,
  functionButton,
  isSelect = false,
  className = '',
  variant = 'filled',
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      onClick={!disabled ? functionButton : undefined}
      className={` ${className} flex h-12 min-w-30 cursor-pointer items-center justify-center gap-1 rounded-lg p-2 leading-none shadow-[0px_5px_4px_0px_#00000025] transition-all ${variant === 'filled' ? 'bg-primary hover:bg-secondary text-text' : 'border-primary hover:bg-primary border-2'} ${disabled ? 'bg-primary/30 text-text/30 pointer-events-none cursor-not-allowed' : 'cursor-pointer'}`}
      {...props}
    >
      {/* <span className="font-inter font-semibold">{text}</span> */}
      <div
        className={`flex items-center gap-2 ${iconSide === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        {/* {text && <span className="font-inter font-semibold">{text}</span>}
        {subText && <span className="font-inter font-semibold">{subText}</span>} */}
        {(text || subText) && (
          <div className="flex items-center gap-110 text-center">
            {text && <span className="font-inter">{text}</span>}
            {subText && <span className="font-inter">{subText}</span>}
          </div>
        )}
      </div>
      {isSelect && <ChevronDown size={20} />}
    </button>
  )
}
