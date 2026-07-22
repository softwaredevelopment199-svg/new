import client from './client'
import { DashboardStats } from '@/types'

export const dashboardAPI = {
  getStats: () => client.get<DashboardStats>('/dashboard/stats'),
  getRevenueChart: () => client.get('/dashboard/revenue'),
  getOrdersChart: () => client.get('/dashboard/orders'),
}
