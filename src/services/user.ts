import { API } from '@/lib/axios'
import { RegisterSchema } from '@/types/schema/register'
import { UpdateInfoResolve } from '@/types/update/info'

export class UserService {
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

  static async updateAllInfo(id: string, data: UpdateInfoResolve) {
    await API.patch('/updateInfo', {
      id,
      data,
    })
  }

  static async register(data: RegisterSchema) {
    const response = await API.post('signUp', data)
    return response.data
  }

  static async listUser() {
    const response = await API.get('user')
    return response.data.response
  }
}
