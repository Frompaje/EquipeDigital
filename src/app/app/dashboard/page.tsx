'use client'

import { useAuth } from '@/providers/authContext'
import { DashBoardMobile } from './mobile/page'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import DeleteDailog from '@/components/common/actions/delete/dailog'
import { useQuery } from '@tanstack/react-query'
import { UserService } from '@/services/listUsers'
import { LoadingSpin } from '@/components/common/loadingSpin'
import { User } from '@/types/user'
import { Pencil } from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => UserService.listUser(),
    staleTime: 1000 * 60 * 5,
  })

  const [valorInputId] = useState('')

  const isAdmin = user?.role === 'Admin'

  const [swithMenu, setSwithMenu] = useState<{ [key: number]: boolean }>({})

  const handleSwithMenu = (index: number) => {
    setSwithMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  const openDialog = () => {
    dialogRef.current?.showModal()
  }

  return (
    <main className="p-4 flex flex-col justify-center ">
      <DashBoardMobile
        data={data}
        user={user}
        swithMenu={swithMenu}
        handleSwithMenu={handleSwithMenu}
        dialogRef={dialogRef}
        id={valorInputId}
        openDialog={openDialog}
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
          {isLoading && <LoadingSpin />}
          {data &&
            data.map((value: User) => (
              <div key={value.email} className="max-h-56  overflow-auto">
                <div>
                  <ul
                    className={
                      isAdmin
                        ? 'grid grid-cols-4 gap-4 p-4 rounded-2xl text-black bg-white mb-1'
                        : 'grid grid-cols-2 gap-4 p-4 rounded-2xl text-black bg-white mb-1'
                    }
                  >
                    <li className="flex  justify-center items-center border border-1 rounded border-purple-900">
                      <span>{value.name}</span>
                    </li>

                    <li className="flex  justify-center items-center  border border-1 rounded border-purple-900">
                      <span>{value.email}</span>
                    </li>

                    {isAdmin && (
                      <li className="flex justify-center items-center  border border-1 rounded border-purple-900">
                        <Button onClick={openDialog}>
                          <Pencil />
                        </Button>
                        <DeleteDailog id={valorInputId} dialogRef={dialogRef} />
                      </li>
                    )}
                    {isAdmin && (
                      <li className="flex justify-center border items-center   border-1 rounded border-purple-900">
                        <span className="text-center">{value.role}</span>
                      </li>
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

export default Dashboard
