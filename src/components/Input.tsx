import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, InputHTMLAttributes, useState } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'number'
  error?: string
  placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
      setShowPassword((prevState) => !prevState)
    }

    const inputType = showPassword && type === 'password' ? 'text' : type

    return (
      <div className="flex flex-col gap-1">
        <div
          className={`border-primary flex items-center rounded-[12px] border-[2px] ${error ? 'border-red-500' : 'border-primary'}`}
        >
          <input
            className="font-inter placeholder-text text-text h-11 w-full appearance-none border-0 bg-transparent px-[14px] py-[8px] outline-0"
            type={inputType}
            placeholder={placeholder}
            aria-invalid={!!error}
            ref={ref}
            {...props}
            autoComplete="off"
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={toggleShowPassword}
              className="mr-4 text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
            >
              {showPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'
