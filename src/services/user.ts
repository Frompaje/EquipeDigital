import { API } from '@/lib/axios'
import { RegisterSchema } from '@/types/schema/register'

export class UserService {
  static async register(data: RegisterSchema) {
    const response = await API.post('/signUp', data)
    return response.data
  }

  static async updateEmail(id?: string, newEmail?: string, oldEmail?: string) {
    await API.patch('/updateEmail', {
      id,
      newEmail,
      oldEmail,
    })
  }

  static async updatePassword(
    id?: string,
    password?: string,
    repeatPassword?: string,
  ) {
    await API.patch('/updatePassword', {
      id,
      password,
      repeatPassword,
    })
  }

  static async updateName(id?: string, name?: string) {
    await API.patch('/updateName', {
      id,
      name,
    })
  }

  static async updateAllInfo(
    id: string,
    email: string,
    name: string,
    password: string,
  ) {
    await API.patch('/updateInfo', {
      id,
      email,
      name,
      password,
    })
  }

  static async deleteUser(id: string) {
    await API.delete('/user', {
      data: {
        id,
      },
    })
  }

  static async listUser() {
    const response = await API.get('/listUsers')
    return response.data.response
  }
}
