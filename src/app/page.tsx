'use client'
import { Login } from '@/pages/login'
import { Providers } from '@/providers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function Home() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Providers>
  )
}
