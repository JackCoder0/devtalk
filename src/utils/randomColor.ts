import { useEffect, useState } from 'react'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const useAvatarColor = () => {
  const [avatarColor, setAvatarColor] = useState<string>('')

  useEffect(() => {
    const storedColor = sessionStorage.getItem('avatarColor')
    if (storedColor) {
      setAvatarColor(storedColor)
    } else {
      const newColor = getRandomColor()
      setAvatarColor(newColor)
      sessionStorage.setItem('avatarColor', newColor)
    }
  }, [])

  return avatarColor
}
