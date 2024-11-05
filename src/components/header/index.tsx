'use client'

import { DoorOpen, House, SquareUserRound } from 'lucide-react'
import { MenuMobile } from './menuMobile'
import Link from 'next/link'

const listNav = [
  {
    name: 'Home',
    href: '/app/',
    icon: <House />,
  },
  {
    name: 'Conta',
    href: '/app/account',
    icon: <SquareUserRound />,
  },
  {
    name: 'Sair',
    href: '/',
    icon: <DoorOpen />,
  },
]

export const Header = () => {
  return (
    <header className="p-4 font-bold text-white bg-purple-950">
      <nav className="flex justify-around">
        <MenuMobile />

        <ul className="hidden gap-5 p-1 md:flex">
          {listNav.map((value) => (
            <li
              key={value.name}
              className="flex p-1 rounded cursor-pointer hover:bg-purple-700 hover:text-white"
            >
              <Link href={value.href} className="flex gap-1  ">
                {value.icon} {value.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
