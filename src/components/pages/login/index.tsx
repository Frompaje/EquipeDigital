import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { loginSchema, LoginSchema } from '@/types/login'
import { AuthService } from '@/services/auth'
import { LoadingSpin } from '@/components/loadingSpin'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useAuth } from '@/providers/authContext'

export const LoginForm = () => {
  const { handleLogin } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: AuthService.auth,
    onSuccess: async (data) => {
      toast.success('Bem-vindo(a), Logado com sucesso!')
      await handleLogin(data)
    },

    onError: async () => {
      toast.error('Credenciais inválidas!')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  function handleLoginForm(data: LoginSchema) {
    mutate(data)
  }

  return (
    <div className="flex flex-col w-full md:w-2/4 h-full justify-center">
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className="flex justify-center "
      >
        <div className="w-full p-4 md:w-9/12 flex flex-col gap-4">
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
          <div>
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

          <Button type="submit" disabled={isPending || !isValid}>
            {isPending ? <LoadingSpin /> : 'Entrar'}
          </Button>
        </div>
      </form>
      <div className="w-full flex flex-col items-center justify-center p-1 gap-2 mt-2">
        <p className="mb-1">Novo por aqui? Crie sua conta agora!</p>
        <Link
          to={'/signUp '}
          className="text-purple-900 text-center hover:text-purple-950"
        >
          Registre-se
        </Link>
      </div>
    </div>
  )
}
