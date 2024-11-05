import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/authContext'
import { DoorOpen } from 'lucide-react'

export const Leave = () => {
  const { handleLogout } = useAuth()

  return (
    <Button className="flex gap-2 w-full" onClick={handleLogout}>
      <DoorOpen /> Leave
    </Button>
  )
}
