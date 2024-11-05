import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserService } from '@/services/user'
import { updateInfoResolve, UpdateInfoResolve } from '@/types/update/info'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type Props = {
  id: string
  dialogRef: React.RefObject<HTMLDialogElement>
}

const DeleteDailog = ({ id, dialogRef }: Props) => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: UpdateInfoResolve) =>
      await UserService.updateAllInfo(id, data),
    onSuccess: async () => {
      toast.success('Atualizado com sucesso!')
      setTimeout(() => redirect('/app/account'), 400)
    },
    onError: () => {
      toast.error('Credenciais inválidas.')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<UpdateInfoResolve>({
    resolver: zodResolver(updateInfoResolve),
  })

  function handleUpdateEmailForm(data: UpdateInfoResolve) {
    mutate(data)
  }

  const closeDialog = () => {
    dialogRef.current?.close()
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
        <div>
          <p className="text-gray-500 text-wrap">
            Você pode atualizar apenas as informações que deseja sem precisar
            modificar tudo.
          </p>
        </div>

        <form onSubmit={handleSubmit((data) => handleUpdateEmailForm(data))}>
          <div className="w-full p-4  flex flex-col gap-2">
            <div>
              <label
                className="text-purple-800 flex justify-start"
                htmlFor="email"
              >
                Novo Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="exemplo@gmail.com"
                {...register('email')}
              />
            </div>

            <div>
              <label
                className="text-purple-800 flex justify-start"
                htmlFor="name"
              >
                Novo Name
              </label>
              <Input
                type="text"
                id="Name"
                placeholder="Yan Edwards"
                {...register('name')}
              />
            </div>
            <div>
              <label
                className="text-purple-800 flex justify-start"
                htmlFor="password"
              >
                Novo Email
              </label>
              <Input
                type="password"
                id="password"
                placeholder="******"
                {...register('password')}
              />
            </div>

            <Button type="submit" disabled={isValid}>
              {isPending ? <LoadingSpin /> : 'Enviar as atualizações'}
            </Button>
            <Button onClick={closeDialog}>
              {isPending ? <LoadingSpin /> : 'Fechar'}
            </Button>
          </div>
        </form>
      </dialog>
    </>
  )
}

export default DeleteDailog
