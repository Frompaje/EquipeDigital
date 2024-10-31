import { LoginForm } from '@/components/pages/login'

export const Login = () => {
  return (
    <main className="flex h-screen ">
      <div className="ml-1 mt-1 mb-1 bg-purple-500 text-white rounded-lg w-1/2 flex flex-col justify-center text-center ">
        <h1 className="text-3xl font-semibold">Bem-vindo de volta </h1>
        <p className="text-gray-300 p-5">
          Acesse sua conta de forma rápida e segura. Insira suas credenciais
          para visualizar e gerenciar suas informações de usuário com
          facilidade.
        </p>
      </div>
      <LoginForm />
    </main>
  )
}
