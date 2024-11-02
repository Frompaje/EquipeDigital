import { Link } from 'react-router-dom'
import { MenuMobile } from './menuMobile'
import { Input } from '../ui/input'

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
              <Link to={value.href}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
