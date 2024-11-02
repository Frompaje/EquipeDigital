import { API } from '@/lib/axios'

export class UpdateUserService {
  static async updateUser(id?: string, email?: string, name?: string) {
    await API.post('/updateUser', {
      id,
      email,
      name,
    })
  }
}
