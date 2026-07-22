
// Auth Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'SUPER_ADMIN' | 'MERCHANT_ADMIN' | 'DISPATCHER' | 'RIDER' | 'CUSTOMER'
  merchantId?: string
  permissions: string[]
}

export interface AuthResponse {
  token: string
  refreshToken: string
  user: User
}

// Order Types
export interface Order {
  id: string
  orderNumber: string
  merchantId: string
  customerId: string
  riderId?: string
  status: 'PENDING' | 'ASSIGNED' | 'ACCEPTED' | 'PICKED_UP' | 'IN_TRANSIT' | 'ARRIVED' | 'DELIVERED' | 'CANCELLED'
  deliveryAddress: string
  recipientName: string
  recipientPhone: string
  totalAmount: number
  paymentMethod: string
  paymentStatus: string
  createdAt: string
  estimatedDeliveryTime?: string
  deliveredAt?: string
}

// Rider Types
export interface Rider {
  id: string
  userId: string
  phoneNumber: string
  vehicleType: 'MOTORCYCLE' | 'CAR' | 'TRUCK'
  status: 'OFFLINE' | 'ONLINE' | 'BUSY' | 'SUSPENDED'
  currentLatitude?: number
  currentLongitude?: number
  averageRating: number
  totalOrdersCompleted: number
  walletBalance: number
}

// Merchant Types
export interface Merchant {
  id: string
  businessName: string
  email: string
  phoneNumber: string
  city: string
  commissionRate: number
  isActive: boolean
  createdAt: string
}

// API Response Types
export interface ApiResponse<T> {
  status: string
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}
