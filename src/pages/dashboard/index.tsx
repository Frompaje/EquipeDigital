import { useAuth } from '@/providers/authContext'
import { useState } from 'react'
import { DashBoardMobile } from './mobile'

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
]

export const Dashboard = () => {
  const { user } = useAuth()

  const isAdmin = user?.role === 'Admin'

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
        <div className="flex-col p-4 bg-gray-100 rounded  hidden lg:flex">
          <h1 className="font-bold font-">Tabela dos Usuários </h1>
          <div
            className={
              isAdmin
                ? ' grid grid-cols-4 gap-4 p-4 rounded-2xl'
                : ' grid grid-cols-2 gap-4 p-4 rounded-2xl'
            }
          >
            <div className="flex justify-center">Nome</div>
            <div className="flex justify-center">Email</div>

            {isAdmin && <div className="flex justify-center">Ações</div>}
            {isAdmin && <div className="flex justify-center">Role</div>}
          </div>

          {listNav &&
            listNav.map((value) => (
              <div key={value.email} className="max-h-56  overflow-auto">
                <div>
                  <ul
                    className={
                      isAdmin
                        ? 'grid grid-cols-4 gap-4 p-4 rounded-2xl text-black bg-white mb-1'
                        : 'grid grid-cols-2 gap-4 p-4 rounded-2xl text-black bg-white mb-1'
                    }
                  >
                    <div className="flex  justify-center border border-1 rounded border-purple-900">
                      <span>{value.name}</span>
                    </div>
                    <div className="flex  justify-center border border-1 rounded border-purple-900">
                      <span>{value.email}</span>
                    </div>

                    {isAdmin && (
                      <div className="flex justify-center border border-1 rounded border-purple-900">
                        <span>{value.acoes}</span>
                      </div>
                    )}
                    {isAdmin && (
                      <div className="flex justify-center border  border-1 rounded border-purple-900">
                        <span className="text-center">{value.role}</span>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
