import { jwtDecode } from 'jwt-decode'

import { TokenUser } from '@/types/authContext'

export function decodeJWT(jwt: string) {
  return jwtDecode<TokenUser>(jwt)
}
