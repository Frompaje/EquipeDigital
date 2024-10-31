import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

interface ProvidersProps {
  children: ReactNode
}
export const Providers = ({ children }: ProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <Toaster duration={1500} richColors />
  </QueryClientProvider>
)
