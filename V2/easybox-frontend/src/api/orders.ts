import client from './client'
import { Order } from '@/types'

export const ordersAPI = {
  getAll: () => client.get<Order[]>('/orders'),
  getById: (id: string) => client.get<Order>(`/orders/${id}`),
  create: (data: Partial<Order>) => client.post<Order>('/orders', data),
  update: (id: string, data: Partial<Order>) =>
    client.put<Order>(`/orders/${id}`, data),
  delete: (id: string) => client.delete(`/orders/${id}`),
  updateStatus: (id: string, status: string) =>
    client.patch(`/orders/${id}/status`, { status }),
}
