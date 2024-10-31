import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query'
import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}
export const Providers = ({ children }: ProvidersProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
