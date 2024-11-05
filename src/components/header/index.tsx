'use client'

import { MenuMobile } from './menuMobile'
import { Input } from '../ui/input'
import Link from 'next/link'

const listNav = [
  {
    name: 'Conta',
    href: '/app/account',
  },
  {
    name: 'Home',
    href: '/app/',
  },
  {
    name: 'Sair',
    href: '/',
  },
]

export const Header = () => {
  return (
    <header className="p-4 font-bold text-white bg-purple-950">
      <nav className="flex justify-around">
        <form>
          <Input type="search" id="search" name="search"></Input>
        </form>

        <MenuMobile />

        <ul className="hidden gap-5 p-1 md:flex">
          {listNav.map((value) => (
            <li
              key={value.name}
              className="flex p-1 rounded cursor-pointer hover:bg-purple-700 hover:text-white"
            >
              <Link href={value.href}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
