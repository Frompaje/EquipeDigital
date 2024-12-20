'use client'

import { LoginForm } from '@/components/pages/login'

export default function App() {
  return (
    <main className="flex h-screen">
      <div className="hidden ml-1 mt-1 mb-1 bg-purple-500 text-white rounded-lg w-1/2 md:flex flex-col justify-center ">
        <h1 className="text-3xl font-semibold text-center">
          Bem-vindo de volta
        </h1>
        <p className="text-gray-300 p-5 text-center">
          Acesse sua conta de forma rápida e segura. Insira suas credenciais
          para visualizar e gerenciar suas informações de usuário com
          facilidade.
        </p>
      </div>
      <LoginForm />
    </main>
  )
}
