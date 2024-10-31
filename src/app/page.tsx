'use client'
import { Login } from '@/pages/login'
import { Register } from '@/pages/register'
import { Providers } from '@/providers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Providers>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<Register />} />
          </Routes>
        </Router>
      </Providers>
    </>
  )
}
