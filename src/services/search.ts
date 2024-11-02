import { API } from '@/lib/axios'

export class SearchService {
  static async listData(search: string) {
    const response = await API.get('search', {
      params: search,
    })

    return response.data
  }

  static async listUsers(page: string) {
    const response = await API.get('page', {
      params: {
        page,
      },
    })
  }
}
