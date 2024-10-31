import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { LoginSchema } from '@/types/login'
import { AuthService } from '@/services/auth'
import { LoadingSpin } from '@/components/loadingSpin'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const LoginForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: AuthService.auth,
  })

  const {
    register,
    handleSubmit,
    formState: { isValid, disabled, errors },
  } = useForm()

  function handleLoginForm(data: LoginSchema) {
    mutate(data)
  }

  return (
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className="w-2/5 flex justify-center items-center"
      >
        <div className="w-9/12 flex flex-col gap-4">
          <div>
            <label className="text-purple-800" htmlFor="email">
              Email
            </label>
            <Input
              type="password"
              id="password"
              placeholder="example@gmail.com"
              {...register('password')}
            />
          </div>
          <div>
            <label className="text-purple-800" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="*******"
              {...register('password')}
            />
          </div>

          <Button type="submit" disabled={isPending || !isValid}>
            Entrar
            {isPending && <LoadingSpin />}
          </Button>
        </div>
      </form>
  )
}
