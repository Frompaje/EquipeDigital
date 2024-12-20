'use client'

import { RegisterForm } from '@/components/pages/register'

const Register = () => {
  return (
    <main className="flex h-screen">
      <div className="hidden ml-1 mt-1 mb-1 bg-purple-500 text-white rounded-lg w-1/2 md:flex flex-col justify-center ">
        <h1 className="text-3xl font-semibold text-center">Junte-se a Nós</h1>
        <p className="text-gray-300 p-5 text-center">
          Registre-se para aproveitar uma experiência segura e personalizada.
          Preencha suas informações e comece a explorar todos os recursos
          disponíveis para gerenciar sua conta com tranquilidade.
        </p>
      </div>
      <RegisterForm />
    </main>
  )
}

export default Register
