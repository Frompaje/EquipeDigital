import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/providers/authContext'
import { UpdateUserService } from '@/services/updateUser'
import {
  updatePasswordResolve,
  UpdatePasswordResolve,
} from '@/types/update/password'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const UpdateUserPasswordForm = () => {
  const navigate = useNavigate()

  const { user } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { password: string; repeatPassword?: string }) =>
      await UpdateUserService.password(
        user?.id,
        data.password,
        data.repeatPassword,
      ),
    onSuccess: async () => {
      toast.success('Senha atualizado com sucesso!')
      setTimeout(() => navigate('/account'), 400)
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
    <div className="flex flex-col w-full h-full justify-center">
      <form
        onSubmit={handleSubmit((data) => handleUpdatePasswordForm(data))}
        className="flex justify-center "
      >
        <div className="w-full p-4  flex flex-col gap-2">
          <div>
            <label className="text-purple-800" htmlFor="email">
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
            <label className="text-purple-800" htmlFor="email">
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
