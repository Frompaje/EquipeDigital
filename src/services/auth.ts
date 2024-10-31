import { API } from '@/lib/axios'
import { LoginSchema } from '@/types/login'

export class AuthService {
  static async auth(data: LoginSchema) {
    const response = await API.post('login', data)
    return response.data
  }
}
