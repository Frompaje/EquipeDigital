import { Loader2 } from 'lucide-react'

export const LoadingSpin = () => {
  return (
    <div className="flex items-center justify-center ">
      <Loader2 className="text-blue-500 animate-spin" size={32} />
      <p className="ml-2">Carregando...</p>
    </div>
  )
}
