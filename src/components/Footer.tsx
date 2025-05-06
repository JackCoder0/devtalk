import { Calendar, Clock, Mail, MessageSquareText, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const icons = [Mail, Calendar, MessageSquareText, Shield, Clock]

  return (
    <footer className="flex flex-col">
      <nav className="flex items-center justify-between border-b-2 border-[#3C3C3C] p-5">
        <p className="text-sm text-[#92989F]">All rights reserved DevTalk.</p>

        <Link to="/">
          <p className="font-inter text-text text-4xl font-bold">DevTalk</p>
        </Link>

        <ul className="flex gap-5 text-sm text-[#92989F]">
          <li>
            <Link to="/" className="hover:text-primary">
              Terms of use
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-5 p-5">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="border-primary cursor-pointer rounded-full border-2 p-2"
          >
            <Icon size={25} className="text-primary" />
          </div>
        ))}
      </div>
    </footer>
  )
}
