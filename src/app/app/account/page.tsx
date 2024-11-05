import Link from 'next/link'

const listNav = [
  {
    name: 'Email',
    href: 'account/email',
  },
  {
    name: 'Senha',
    href: 'account/password',
  },
  {
    name: 'Nome',
    href: 'account/name',
  },
]

const Account = () => {
  return (
    <main
      className="p-4 bg-purple-500  h-screen text-purple-100 
"
    >
      <div className="md:flex md:flex-col md:w-full  md:items-center ">
        <div className="flex flex-col gap-4 max-w-[768px] md:items-start md:w-full">
          <h1 className="text-xl flex justify-center text-purple-950 font-semibold ">
            Escolha a opção que deseja atualizar
          </h1>
          <div>
            <p>
              <span className="font-semibold text-purple-950">Email: </span>
              Atualize seu endereço de e-mail.
            </p>
            <p>
              <span className="font-semibold text-purple-950">Nome:</span>{' '}
              Altere o nome exibido na sua conta.
            </p>
            <p>
              <span className="font-semibold text-purple-950">Senha:</span>{' '}
              Troque sua senha para maior segurança.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-2  w-11/12  max-w-[768px] ">
          {listNav.map((value) => (
            <li
              className="p-1 w-full rounded cursor-pointer bg-purple-950 hover:bg-purple-900 text-white"
              key={value.name}
            >
              <Link href={value.href}>
                <div className="w-full">{value.name} </div>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </main>
  )
}
export default Account
