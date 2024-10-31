import { LoginForm } from '@/components/pages/login'
import { Button } from '@/components/ui/button'

export const Login = () => {
  return (
    <main className="flex h-screen ">
      <div className="ml-1 mt-1 mb-1 bg-purple-500 text-white rounded-lg w-1/2 flex flex-col justify-center ">
        <h1 className="text-3xl font-semibold text-center">
          Bem-vindo de volta{' '}
        </h1>
        <p className="text-gray-300 p-5">
          Acesse sua conta de forma rápida e segura. Insira suas credenciais
          para visualizar e gerenciar suas informações de usuário com
          facilidade.
        </p>
        <div className="w-full flex justify-center flex-col items-center p-1">
          <p className="mb-1">Novo por aqui? Crie sua conta agora!</p>
          <Button className="w-1/3  text-center">Registre-se</Button>
        </div>
      </div>
      <LoginForm />
    </main>
  )
}
