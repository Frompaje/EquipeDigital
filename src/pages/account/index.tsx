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
    <main>
      <h1>Escolha a opção que deseja atualizar</h1>
      <div>
        <p>Selecione a informação que deseja modificar em sua conta:</p>
        <p>
          <span className="font-semibold text-purple-950">Email: </span>Atualize
          seu endereço de e-mail.
        </p>
        <p>
          <span className="font-semibold text-purple-950">Nome:</span> Altere o
          nome exibido na sua conta.
        </p>
        <p>
          <span className="font-semibold text-purple-950">Senha:</span> Troque
          sua senha para maior segurança.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        {listNav.map((value) => (
          <li
            className="bg-purple-950 text-white border flex justify-center p-2 rounded w-full"
            key={value.name}
          >
            <Link to={value.href}>{value.name}</Link>
          </li>
        ))}
      </div>
    </main>
  )
}
export default Account
