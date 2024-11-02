import { API } from '@/lib/axios'

export class UpdateUserService {
  static async email(id?: string, newEmail?: string, oldEmail?: string) {
    console.log(newEmail)
    await API.post('/updateEmail', {
      id,
      newEmail,
      oldEmail,
    })
  }
}
