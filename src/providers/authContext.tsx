import cookies from 'js-cookie'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { decodeJWT } from '@/helper/decodeJWT'
import { API } from '@/lib/axios'

type TAuthContext = {
  user: {
    id: string
    email: string
    name: string
    role: string
  } | null
  userToken: string | undefined | null
  handleLogin: (data: string) => Promise<void>
  handleLogout: () => void
  setUser: (
    user: { id: string; email: string; name: string; role: string } | null,
  ) => void
}

const AuthContext = createContext({} as TAuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userToken, setUserToken] = useState<string | undefined | null>(() => {
    return cookies.get('_helper-auth')
  })

  const [user, setUser] = useState(() => {
    if (userToken) {
      API.defaults.headers.authorization = `Bearer ${userToken}`
      const decodedUser = decodeJWT(userToken)
      const { user } = decodedUser
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    }
    return null
  })

  const navigate = useNavigate()

  const handleLogin = useCallback(
    async (data: string) => {
      console.log(data)
      setUserToken(data)
      cookies.set('_user-auth', data, { expires: 7 })
      API.defaults.headers.authorization = `Bearer ${data}`
      navigate('app/')
    },
    [setUserToken, navigate],
  )
  const handleLogout = useCallback(() => {
    setUserToken(null)
    setUser(null)
    cookies.remove('_user-auth')
    navigate('/', { replace: true })
  }, [setUserToken, setUser, navigate])

  useEffect(() => {
    if (userToken) {
      API.defaults.headers.authorization = `Bearer ${userToken}`
      const decodedUser = decodeJWT(userToken)
      const { user } = decodedUser
      setUserToken(userToken)
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      })
    }
  }, [userToken])

  useEffect(() => {
    if (
      !cookies.get('_user-auth') &&
      !window.location.pathname.includes('signup')
    ) {
      navigate('/')
    }
  }, [navigate])

  const value = useMemo(
    () => ({
      user,
      userToken,
      handleLogin,
      handleLogout,
      setUser,
    }),
    [handleLogin, handleLogout, user, setUser, userToken],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
