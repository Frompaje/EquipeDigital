import { Header } from '@/components/header'
import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface AuthLayoutProps {
  children?: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Header />
      {children || <Outlet />}
    </>
  )
}

export default AuthLayout
