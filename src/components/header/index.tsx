'use client'

import { House, SquareUserRound } from 'lucide-react'
import { MenuMobile } from './menuMobile'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Leave } from '../common/leave'

export const Header = () => {
  return (
    <header className="p-4 font-bold text-white bg-purple-950">
      <nav className="flex justify-around">
        <MenuMobile />

        <ul className="hidden gap-5 p-1 md:flex">
          <li className="p-1 w-full rounded cursor-pointer hover:text-white">
            <Link href={'/app/'}>
              <Button className="w-full flex gap-1">
                <House /> Home
              </Button>
            </Link>
          </li>

          <li className="p-1 w-full rounded cursor-pointer  hover:text-white">
            <Link href={'/app/account'}>
              <Button className="w-full flex gap-1">
                <SquareUserRound /> Home
              </Button>
            </Link>
          </li>

          <li className="p-1 w-full rounded cursor-pointer  hover:text-white">
            <Link href={'/app/account'}>
              <Leave />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
