import { UpdateUserPasswordForm } from '@/components/common/update/password'

const UpdateUserPassword = () => {
  return (
    <div className="bg-purple-500 h-screen">
      <h1 className="text-xl flex justify-center">Atualize seu Senha</h1>
      <UpdateUserPasswordForm />
    </div>
  )
}

export default UpdateUserPassword
