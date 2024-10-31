import { jwtDecode } from 'jwt-decode'

import { TokenResetPassword, TokenUser } from '@/types/authContext'

export function decodeJWT(jwt: string) {
  return jwtDecode<TokenUser>(jwt)
}
export function decodeJWTResetPassword(jwt: string) {
  return jwtDecode<TokenResetPassword>(jwt)
}
