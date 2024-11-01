import { User } from '@/types/user'
import { ChevronUp } from 'lucide-react'

type DataResponse = {
  name: string
  email: string
  acoes: string
}

type Props = {
  user: User | null
  data: DataResponse[] | null
  swithMenu: { [key: number]: boolean }
  handleSwithMenu: (index: number) => void
}

export const DashBoardMobile = ({
  data,
  user,
  swithMenu,
  handleSwithMenu,
}: Props) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded max-h-96 md:hidden">
      <h1 className="font-bold font-">Tabela dos Usuários </h1>
      {data &&
        data.map((value, index) => (
          <div
            className={swithMenu[index] ? 'flex flex-col' : ''}
            key={value.email}
          >
            <button onClick={() => handleSwithMenu(index)} className="w-full">
              <li
                className={
                  swithMenu[index]
                    ? 'p-1 flex w-full justify-between rounded-t-lg cursor-pointer bg-purple-950 text-white '
                    : 'p-1 w-full rounded cursor-pointer hover:bg-purple-950 hover:text-white'
                }
              >
                <div className="p-1 flex w-full justify-between rounded cursor-pointer bg-purple-950 text-white items-start">
                  <span>{value.name}</span>
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
                <ul className="flex flex-col w-full text-black bg-white ">
                  <li>
                    <div className="flex flex-col border border-1 border-purple-900">
                      <span className="w-full bg-purple-950 text-white">
                        Email
                      </span>
                      <span>{value.email}</span>
                    </div>
                    {user?.role === 'Admin' && (
                      <div className="flex flex-col border border-1 border-purple-900">
                        <span className="w-full bg-purple-950 text-white">
                          Ações
                        </span>
                        <span>{value.acoes}</span>
                      </div>
                    )}
                  </li>
                </ul>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}
