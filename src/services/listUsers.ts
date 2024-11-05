import { API } from '@/lib/axios'
import { User } from '@/types/user'

export class UserService {
  static async listUser() {
    const response = await API.get<User[]>('user')
    return response.data.response
  }
}
