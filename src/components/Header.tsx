import { Link, useNavigate } from 'react-router-dom'

import { Button } from './Button'
import { ModeToggle } from './theme/mode-toggle'

export interface HeaderProps {
  type?: 'home' | 'auth' | 'register'
}

export const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate()

  // async function handleAccount() {
  //   navigate('/auth/signup')
  // }

  async function handleLogin() {
    navigate('/auth/signin')
  }

  return (
    <header className="flex items-center justify-between p-5">
      <Link to="/">
        <p className="font-inter text-text text-4xl font-bold">DevTalk</p>
      </Link>

      <nav className="flex items-center justify-center gap-5">
        <a className="font-inter hover:text-primary" href="#">
          About Us
        </a>
        <a className="font-inter hover:text-primary" href="#">
          Help and Support
        </a>
        <a className="font-inter hover:text-primary" href="#">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-5">
        <ModeToggle />
        <Button variant="outline" text="Login" onClick={handleLogin} />
        {/* <Button text="Login" onClick={handleLogin} /> */}
      </div>
    </header>
  )
}
