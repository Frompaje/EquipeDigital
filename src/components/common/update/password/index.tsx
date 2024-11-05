'use client'
import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/providers/authContext'
import { UserService } from '@/services/user'
import {
  updatePasswordResolve,
  UpdatePasswordResolve,
} from '@/types/update/password'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const UpdateUserPasswordForm = () => {
  const { user } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { password: string; repeatPassword?: string }) =>
      await UserService.updatePassword(
        user?.id,
        data.password,
        data.repeatPassword,
      ),
    onSuccess: async () => {
      toast.success('Senha atualizado com sucesso!')
      setTimeout(() => redirect('/app/account'), 400)
    },
    onError: () => {
      toast.error('Credenciais inválidas. Evite usar sua senha antiga')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<UpdatePasswordResolve>({
    resolver: zodResolver(updatePasswordResolve),
    mode: 'onChange',
  })

  function handleUpdatePasswordForm(data: UpdatePasswordResolve) {
    mutate(data)
  }

  return (
    <div className="flex flex-col w-full  md:items-center h-screen justify-start">
      <form
        onSubmit={handleSubmit((data) => handleUpdatePasswordForm(data))}
        className="flex justify-center max-w-[768px] md:w-full "
      >
        <div className="w-full p-4  flex flex-col gap-2">
          <div>
            <label className="text-purple-100" htmlFor="email">
              Nova senha
            </label>
            <Input
              type="password"
              id="repeatPassword"
              placeholder="*********"
              {...register('password')}
            />
          </div>

          <div>
            <label className="text-purple-100" htmlFor="email">
              Digite novamente a senha
            </label>
            <Input
              type="password"
              id="repeatPassword"
              placeholder="*********"
              {...register('repeatPassword')}
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
