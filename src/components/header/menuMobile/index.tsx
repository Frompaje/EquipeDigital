import { ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const listNav = [
  {
    name: 'Conta',
    href: '/account',
  },
  {
    name: 'Sair',
    href: '/',
  },
]

export const MenuMobile = () => {
  const [swithMenu, setSwithMenu] = useState(false)

  const handleSwithMenu = () => {
    setSwithMenu(!swithMenu)
  }

  return (
    <div className="flex justify-center md:hidden roundend">
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
        <ul className="absolute border rounded-b-lg border-purple-950 left-0 p-2 right-0 w-full text-black bg-white top-16 justify-items-end z-50">
          {listNav.map((value) => (
            <li
              key={value.name}
              className="p-1 w-full rounded cursor-pointer hover:bg-purple-950 hover:text-white"
            >
              <Link to={value.href}>{value.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
