'use client'
import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/providers/authContext'
import { UpdateUserService } from '@/services/updateUser'
import { updateNameResolve, UpdateNameResolve } from '@/types/update/name'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const UpdateUserNameForm = () => {
  const { user } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { name: string }) =>
      await UpdateUserService.changeName(user?.id, data.name),
    onSuccess: async () => {
      toast.success('Nome atualizado com sucesso!')
      setTimeout(() => redirect('/app/account'), 400)
    },
    onError: () => {
      toast.error(
        'Eita, alguma coisa aconteceu!!! Tente novamente mais tarde.  ',
      )
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<UpdateNameResolve>({
    resolver: zodResolver(updateNameResolve),
    mode: 'all',
  })

  function handleUpdateEmailForm(name: string) {
    mutate({
      name,
    })
  }

  return (
    <div className="flex flex-col w-full h-full justify-center">
      <form
        onSubmit={handleSubmit((data) => handleUpdateEmailForm(data.name))}
        className="flex justify-center "
      >
        <div className="w-full p-4  flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span className="text-purple-950">Nome Atual</span>
            <span className="border p-1 w-full rounded cursor-pointer  text-gray-400">
              {user && user.name}
            </span>
          </div>

          <div>
            <label className="text-purple-800" htmlFor="name">
              Digite o novo nome
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Yan Edwards "
              {...register('name')}
            />
          </div>

          <Button type="submit" disabled={isPending || !isValid}>
            {isPending ? <LoadingSpin /> : 'Atualizar os dados'}
          </Button>
        </div>
      </form>
    </div>
  )
}