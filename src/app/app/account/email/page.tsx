import { UpdateUserEmailForm } from '@/components/common/update/email'

const UpdateUserEmail = () => {
  return (
    <div className="bg-purple-500 h-screen">
      <h1 className="text-xl flex justify-center font-semibold p-1">
        Atualize seu Email
      </h1>
      <UpdateUserEmailForm />
    </div>
  )
}

export default UpdateUserEmail
