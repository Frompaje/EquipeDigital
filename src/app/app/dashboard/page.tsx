'use client'

import UpdateDailog from '@/components/common/actions/update/dailog'
import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/authContext'
import { User } from '@/types/user'
import { useQuery } from '@tanstack/react-query'
import {
  Award,
  ChevronUp,
  Eraser,
  Mail,
  Pencil,
  PencilRuler,
} from 'lucide-react'
import { useRef, useState } from 'react'
import { UserService } from '@/services/user'
import DeleteDialog from '@/components/common/actions/delete/dailog'

const Dashboard = () => {
  const { user } = useAuth()

  const dialogRefUpdate = useRef<HTMLDialogElement>(null)
  const dialogRefDelete = useRef<HTMLDialogElement>(null)

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => UserService.listUser(),
    staleTime: 1000 * 60 * 5,
  })

  const [valorInputId, setValorInputId] = useState('')

  const isAdmin = user?.role === 'Admin'

  const [swithMenu, setSwithMenu] = useState<{ [key: number]: boolean }>({})

  const handleSwithMenu = (index: number) => {
    setSwithMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  const handleDialogUpdateWithId = (value: User) => {
    setValorInputId(value.id)
    dialogRefUpdate.current?.showModal()
  }
  const handleDialogDeleteWithId = (value: User) => {
    setValorInputId(value.id)
    dialogRefDelete.current?.showModal()
  }

  return (
    <div className="flex flex-col p-4  bg-purple-500 h-screen overflow-y-scroll lg:flex lg:items-center ">
      <h1 className="flex justify-center font-bold text-purple-200 text-lg">
        Tabela dos Usuários
      </h1>
      {isLoading && <LoadingSpin />}
      {data &&
        data.map((user: User, index: number) => (
          <div key={user.email} className="p-1 lg:w-1/2 ">
            <button onClick={() => handleSwithMenu(index)} className="w-full">
              <li
                className={
                  swithMenu[index]
                    ? 'p-1 flex w-full justify-between rounded-t-lg cursor-pointer bg-purple-400  text-white '
                    : 'p-1 w-full rounded cursor-pointer hover:bg-purple-400 hover:text-white'
                }
              >
                <div
                  className=" flex w-full justify-between rounded 
                cursor-pointer bg-purple-100 text-purple-500 font-semibold items-start p-3"
                >
                  <span>{user.name}</span>
                  <div>
                    {swithMenu[index] ? (
                      <ChevronUp className="rotate-0 ease-in-out  duration-200" />
                    ) : (
                      <ChevronUp className="rotate-180 ease-in-out  duration-200" />
                    )}
                  </div>
                </div>
              </li>
            </button>
            <div>
              {swithMenu[index] && (
                <ul className="flex flex-col w-full bg-purple-100 text-purple-500 font-semibold text-lg ">
                  <li className="flex flex-col border-purple-400 border-4 ">
                    <span className="w-full justify-center border-purple-400 flex items-center gap-1">
                      <Mail /> EMAIL
                    </span>
                    <span className="bg-purple-200 flex justify-center ">
                      {user.email}
                    </span>
                  </li>
                  {isAdmin && (
                    <li className="flex flex-col  border-purple-400 border-4 ">
                      <span className="w-full justify-center border-purple-400 flex items-center gap-1">
                        <PencilRuler /> AÇÕES
                      </span>
                      <div className="flex justify-center gap-2 p-1 bg-purple-200">
                        <Button
                          className="h-8 w-8"
                          onClick={() => handleDialogUpdateWithId(user)}
                        >
                          <Pencil />
                        </Button>

                        <Button
                          className="h-8 w-8"
                          onClick={() => handleDialogDeleteWithId(user)}
                        >
                          <Eraser />
                        </Button>
                      </div>

                      <DeleteDialog
                        refetch={refetch}
                        id={valorInputId}
                        dialogRef={dialogRefDelete}
                      />

                      <UpdateDailog
                        refetch={refetch}
                        id={valorInputId}
                        dialogRef={dialogRefUpdate}
                      />
                    </li>
                  )}
                  {isAdmin && (
                    <li className="flex flex-col border-purple-400 border-4 ">
                      <span className="w-full justify-center border-purple-400 flex items-center gap-1">
                        <Award /> CARGO
                      </span>
                      <span className="bg-purple-200 flex justify-center ">
                        {user.role}
                      </span>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Dashboard
