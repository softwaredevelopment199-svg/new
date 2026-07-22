import client from './client'
import { Merchant } from '@/types'

export const merchantsAPI = {
  getAll: () => client.get<Merchant[]>('/merchants'),
  getById: (id: string) => client.get<Merchant>(`/merchants/${id}`),
  create: (data: Partial<Merchant>) => client.post<Merchant>('/merchants', data),
  update: (id: string, data: Partial<Merchant>) =>
    client.put<Merchant>(`/merchants/${id}`, data),
  delete: (id: string) => client.delete(`/merchants/${id}`),
}
