import client from './client'
import { Rider } from '@/types'

export const ridersAPI = {
  getAll: () => client.get<Rider[]>('/riders'),
  getById: (id: string) => client.get<Rider>(`/riders/${id}`),
  create: (data: Partial<Rider>) => client.post<Rider>('/riders', data),
  update: (id: string, data: Partial<Rider>) =>
    client.put<Rider>(`/riders/${id}`, data),
  delete: (id: string) => client.delete(`/riders/${id}`),
}
