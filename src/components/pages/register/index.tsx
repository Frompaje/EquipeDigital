import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RegisterSchema, registerSchema } from '@/types/schema/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { UserService } from '@/services/user'

export const RegisterForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: UserService.register,
    onSuccess: async () => {
      toast.success('Usuário criado com sucesso!')
      setTimeout(() => redirect('/'), 400)
    },
    onError: () => {
      toast.error('Credenciais inválidas')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  function handleRegisterForm(data: RegisterSchema) {
    mutate(data)
  }

  return (
    <div className="flex flex-col w-full md:w-2/4 h-full justify-center">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="flex justify-center "
      >
        <div className="w-full p-4 md:w-9/12 flex flex-col gap-4">
          <div>
            <label className="text-purple-800" htmlFor="name">
              Nome
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Yan Edwards"
              {...register('name')}
            />
          </div>
          <div>
            <label className="text-purple-800" htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="exemplo@gmail.com"
              {...register('email')}
            />
          </div>
          <div className="flex-col md:flex-row flex gap-4 justify-start">
            <div className="w-full md:w-1/2">
              <label className="text-purple-800" htmlFor="password">
                Senha
              </label>
              <Input
                type="password"
                id="password"
                placeholder="*******"
                {...register('password')}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-purple-800" htmlFor="repeatPassword">
                Repita a senha
              </label>
              <Input
                type="password"
                id="repeatPassword"
                placeholder="*******"
                {...register('repeatPassword')}
              />
            </div>
          </div>

          <Button type="submit" disabled={isPending || !isValid}>
            {isPending ? <LoadingSpin /> : 'Inscrever-se'}
          </Button>
        </div>
      </form>
      <div className="w-full flex flex-col items-center justify-center p-1 gap-2 mt-2">
        <Link
          href={'/'}
          className="text-purple-900 text-center hover:text-purple-950"
        >
          Voltar ao Login
        </Link>
      </div>
    </div>
  )
}
