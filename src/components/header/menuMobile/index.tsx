import { ChevronUp, DoorOpen, House, SquareUserRound } from 'lucide-react'
import { useState } from 'react'
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

export const MenuMobile = () => {
  const [swithMenu, setSwithMenu] = useState(false)

  const handleSwithMenu = () => {
    setSwithMenu(!swithMenu)
  }

  return (
    <div className="flex justify-center md:hidden">
      <button
        onClick={handleSwithMenu}
        className="flex items-center justify-center "
      >
        {swithMenu ? (
          <ChevronUp className="rotate-0 ease-in-out  duration-200" />
        ) : (
          <ChevronUp className="rotate-180 ease-in-out  duration-200" />
        )}
      </button>

      {swithMenu && (
        <ul className="absolute border rounded-b-lg border-purple-950 left-0 p-2 right-0 w-full text-purple-600 bg-white top-14 justify-items-end z-50">
          {listNav.map((value) => (
            <li
              key={value.name}
              className="p-1 w-full rounded cursor-pointer hover:bg-purple-400 hover:text-white"
            >
              <Link href={value.href}>
                <div className="w-full flex gap-1">
                  {value.icon}
                  {value.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
