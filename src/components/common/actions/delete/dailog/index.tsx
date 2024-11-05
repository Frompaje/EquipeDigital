import { LoadingSpin } from '@/components/common/loadingSpin'
import { Button } from '@/components/ui/button'
import { UserService } from '@/services/user'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

type Props = {
  id: string
  dialogRef: React.RefObject<HTMLDialogElement>
  refetch: () => void
}

const DeleteDialog = ({ id, dialogRef, refetch }: Props) => {
  const { mutate, reset, isPending } = useMutation({
    mutationFn: async (id: string) => await UserService.deleteUser(id),
    onSuccess: () => {
      toast.success('Deletado com sucesso!')
      closeDialog()
      refetch()
      reset()
    },
    onError: () => {
      toast.error('Ocorreu um erro ao deletar o usuário.')
    },
  })

  function closeDialog() {
    dialogRef.current?.close()
  }

  function handleDelete() {
    mutate(id)
  }

  return (
    <dialog
      ref={dialogRef}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg bg-white max-w-md"
    >
      <h1 className="text-lg text-purple-950 font-semibold mb-4">
        Deseja deletar este usuário?
      </h1>
      <div className="flex justify-center gap-4">
        <Button onClick={handleDelete} disabled={isPending}>
          {isPending ? <LoadingSpin /> : 'Sim'}
        </Button>
        <Button onClick={closeDialog} variant="secondary" disabled={isPending}>
          Não
        </Button>
      </div>
    </dialog>
  )
}

export default DeleteDialog
