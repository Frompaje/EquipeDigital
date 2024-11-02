import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/authContext'
import { Link } from 'react-router-dom'
import { DashBoardMobile } from './mobile'
import { useState } from 'react'

const listNav = [
  {
    name: 'Yan Edwards',
    email: 'yanedwards@gmail.com',
    acoes: 'ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards2',
    email: '2yanedwards@gmail.com',
    acoes: '2ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards3',
    email: '3yanedwards@gmail.com',
    acoes: '3ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
  {
    name: 'Yan Edwards4',
    email: '4yanedwards@gmail.com',
    acoes: '4ACTIONS',
    role: 'User',
  },
]

export const Dashboard = () => {
  const { user } = useAuth()

  const isAdmin = user?.role === 'admin'

  const [swithMenu, setSwithMenu] = useState<{ [key: number]: boolean }>({})

  const handleSwithMenu = (index: number) => {
    setSwithMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  return (
    <main className="p-4 flex flex-col justify-center ">
      <DashBoardMobile
        data={listNav}
        user={user}
        swithMenu={swithMenu}
        handleSwithMenu={handleSwithMenu}
      />
      <div>
        <div className="flex-col p-4 bg-red-100 rounded max-h-96 hidden md:flex overflow-auto">
          <h1 className="font-bold font-">Tabela dos Usuários </h1>
          <div className="grid grid-cols-4 gap-4 p-4 rounded-2xl">
            <div>Nome</div>
            <div>Email</div>
            <div>Ações</div>

            {isAdmin && <div>Role</div>}
            <div>Role</div>
          </div>

          {listNav &&
            listNav.map((value) => (
              <div key={value.email}>
                <div>
                  <ul className="grid grid-cols-4 gap-4 p-4 rounded-2xl text-black bg-white mb-1">
                    <div className="flex  border border-1 rounded border-purple-900">
                      <span>{value.name}</span>
                    </div>

                    <div className="flex  border border-1 rounded border-purple-900">
                      <span>{value.email}</span>
                    </div>

                    <div className="flex border border-1 rounded border-purple-900">
                      <span>{value.acoes}</span>
                    </div>

                    {isAdmin && (
                      <div className="flex border border-1 rounded border-purple-900">
                        <span className="text-center">{value.role}</span>
                      </div>
                    )}

                    <div className="flex border justify-center border-1 rounded border-purple-900">
                      <span>{value.role}</span>
                    </div>
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
