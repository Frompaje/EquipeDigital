'use client'
import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/providers/authContext'
import { UpdateUserService } from '@/services/updateUser'
import { UpdateEmailResolve, updateEmailResolve } from '@/types/update/email'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const UpdateUserEmailForm = () => {
  const { user } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { newEmail: string; oldEmail?: string }) =>
      await UpdateUserService.email(user?.id, data.newEmail, user?.email),
    onSuccess: async () => {
      toast.success('Email atualizado com sucesso!')
      setTimeout(() => redirect('/app/account'), 400)
    },
    onError: () => {
      toast.error('Credenciais inválidas. Evite usar seu Email antigo')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<UpdateEmailResolve>({
    resolver: zodResolver(updateEmailResolve),
    mode: 'all',
  })

  function handleUpdateEmailForm(newEmail: string) {
    mutate({
      newEmail,
      oldEmail: user?.email,
    })
  }

  return (
    <div className="flex flex-col w-full h-full justify-center">
      <form
        onSubmit={handleSubmit((data) => handleUpdateEmailForm(data.newEmail))}
        className="flex justify-center "
      >
        <div className="w-full p-4  flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span className="text-purple-950">Email Atual</span>
            <span className="border p-1 w-full rounded cursor-pointer  text-gray-400">
              {user && user.email}
            </span>
          </div>

          <div>
            <label className="text-purple-800" htmlFor="email">
              Novo Email
            </label>
            <Input
              type="email"
              id="newEmail"
              placeholder="exemplo@gmail.com"
              {...register('newEmail')}
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
