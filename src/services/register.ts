import { API } from '@/lib/axios'
import { RegisterSchema } from '@/types/schema/register'

export class RegisterService {
  static async register(data: RegisterSchema) {
    const response = await API.post('signUp', data)
    return response.data
  }
}
