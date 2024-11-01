'use client'
import AuthLayout from '@/layouts/auth-layout'
import { Dashboard } from '@/pages/dashboard'
import { Login } from '@/pages/login'
import { Register } from '@/pages/register'
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

              <Route path="/app" element={<AuthLayout />}>
                <Route path="" element={<Dashboard />} />
              </Route>
            </Routes>
          </AuthContextProvider>
        </Router>
      </Providers>
    </>
  )
}
