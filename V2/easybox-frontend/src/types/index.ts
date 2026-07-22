export interface Order {
  id: string
  orderNumber: string
  status: 'pending' | 'picked' | 'in_transit' | 'delivered' | 'cancelled'
  merchantId: string
  riderId?: string
  pickupLocation: string
  deliveryLocation: string
  amount: number
  createdAt: string
  updatedAt: string
}

export interface Rider {
  id: string
  name: string
  email: string
  phone: string
  status: 'active' | 'inactive' | 'on_leave'
  rating: number
  totalDeliveries: number
  createdAt: string
}

export interface Merchant {
  id: string
  businessName: string
  email: string
  phone: string
  location: string
  status: 'active' | 'inactive'
  totalOrders: number
  createdAt: string
}

export interface DashboardStats {
  totalOrders: number
  activeOrders: number
  totalDelivered: number
  totalRevenue: number
  activeRiders: number
  activeMerchants: number
}
