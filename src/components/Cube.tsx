export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: 'filled' | 'outline'
  image?: string
}

export const Cube: React.FC<ButtonProps> = ({
  className,
  variant = 'filled',
  image,
  ...props
}) => {
  return (
    <div
      className={`h-36 w-36 rounded-2xl ${variant === 'outline' ? 'border border-[#697A98] bg-transparent' : className}`}
      {...props}
    >
      {variant === 'outline' && (
        <div className="flex h-full w-full items-center justify-center">
          <img src={image} className="w-28" alt="" />
        </div>
      )}
    </div>
  )
}
