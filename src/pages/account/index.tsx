import { Link } from 'react-router-dom'

const listNav = [
  {
    name: 'Email',
    href: '/email',
  },
  {
    name: 'Senha',
    href: '/password',
  },
  {
    name: 'Nome',
    href: '/name',
  },
]

const Account = () => {
  return (
    <main className="p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl flex justify-center ">
          Escolha a opção que deseja atualizar
        </h1>
        <div>
          <p>Selecione a informação que deseja modificar em sua conta:</p>
          <p>
            <span className="font-semibold text-purple-950">Email: </span>
            Atualize seu endereço de e-mail.
          </p>
          <p>
            <span className="font-semibold text-purple-950">Nome:</span> Altere
            o nome exibido na sua conta.
          </p>
          <p>
            <span className="font-semibold text-purple-950">Senha:</span> Troque
            sua senha para maior segurança.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center p-4">
        {listNav.map((value) => (
          <li
            className="p-1 w-full rounded cursor-pointer bg-purple-950 hover:bg-purple-900 text-white"
            key={value.name}
          >
            <Link to={value.href}>
              <div className="w-full">{value.name} </div>
            </Link>
          </li>
        ))}
      </div>
    </main>
  )
}
export default Account
