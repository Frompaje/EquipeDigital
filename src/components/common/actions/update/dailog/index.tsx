import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserService } from '@/services/user'
import { updateInfoResolve, UpdateInfoResolve } from '@/types/update/info'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type Props = {
  id: string
  dialogRef: React.RefObject<HTMLDialogElement>
  refetch: () => void
}

const UpdateDailog = ({ id, dialogRef, refetch }: Props) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    password: '',
    email: '',
  })

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      id,
      email,
      name,
      password,
    }: UpdateInfoResolve & { id: string }) =>
      await UserService.updateAllInfo(id, email, name, password),
    onSuccess: async () => {
      toast.success('Atualizado com sucesso!')
      setTimeout(() => closeDialog(), 500)
      setTimeout(() => refetch(), 800)
    },
    onError: () => {
      toast.error('Credenciais inválidas.')
    },
  })

  const { register, handleSubmit } = useForm<UpdateInfoResolve>({
    resolver: zodResolver(updateInfoResolve),
  })

  function handleUpdateEmailForm(data: UpdateInfoResolve) {
    mutate({ id, ...data })
  }

  function closeDialog() {
    dialogRef.current?.close()
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setInputValue((prev) => ({ ...prev, [name]: value }))
  }

  function handleReset() {
    setInputValue({ name: '', password: '', email: '' })
  }

  return (
    <>
      <dialog
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg shadow-lg"
      >
        <h1 className="text-base text-purple-950 font-semibold md:text-lg ">
          Atualização de Informações
        </h1>

        <form onSubmit={handleSubmit((data) => handleUpdateEmailForm(data))}>
          <div className="w-full p-4  flex flex-col gap-2">
            <div>
              <label
                className="text-purple-800 flex justify-start"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="exemplo@gmail.com"
                {...register('email')}
                required={false}
                value={inputValue.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                className="text-purple-800 flex justify-start"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                type="text"
                id="Name"
                placeholder="Yan Edwards"
                {...register('name')}
                value={inputValue.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="text-purple-800 flex justify-start"
                htmlFor="password"
              >
                Senha
              </label>
              <Input
                type="password"
                id="password"
                required={false}
                placeholder="******"
                {...register('password')}
                value={inputValue.password}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" onClick={handleReset}>
              {isPending ? <LoadingSpin /> : 'Enviar as atualizações'}
            </Button>
            <Button type="button" onClick={closeDialog}>
              Fechar
            </Button>
          </div>
        </form>
      </dialog>
    </>
  )
}

export default UpdateDailog