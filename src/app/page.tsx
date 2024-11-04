'use client'
import AuthLayout from '@/app/app/layout'
import Account from '@/pages/account/'
import { UpdateUserEmail } from '@/pages/account/email'
import { UpdateUserName } from '@/pages/account/name'
import { UpdateUserPassword } from '@/pages/account/password'
import Dashboard from '@/pages/dashboard'
import Login from '@/pages/login'
import Register from '@/pages/register'
import { Providers } from '@/providers'
import { AuthContextProvider } from '@/providers/authContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Providers>
        <Router>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signUp" element={<Register />} />

              <Route element={<AuthLayout />}>
                <Route index path="/app" element={<Dashboard />} />
                <Route path="/account" element={<Account />} />
                <Route path="/email" element={<UpdateUserEmail />} />
                <Route path="/password" element={<UpdateUserPassword />} />
                <Route path="/name" element={<UpdateUserName />} />
              </Route>
            </Routes>
          </AuthContextProvider>
        </Router>
      </Providers>
    </>
  )
}
