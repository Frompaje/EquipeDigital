import { API } from '@/lib/axios'
import { UpdateInfoResolve } from '@/types/update/info'

export class UpdateUserService {
  static async email(id?: string, newEmail?: string, oldEmail?: string) {
    await API.patch('/updateEmail', {
      id,
      newEmail,
      oldEmail,
    })
  }

  static async password(
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

  static async changeName(id?: string, name?: string) {
    await API.patch('/updateName', {
      id,
      name,
    })
  }

  static async changeAllInfo(id: string, data: UpdateInfoResolve) {
    await API.patch('/updateInfo', {
      id,
      data,
    })
  }
}
