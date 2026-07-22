export const API_ENDPOINTS = {
    // Auth
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
    ME: '/auth/me',
    // Orders
    ORDERS: '/orders',
    ORDER_BY_ID: (id) => `/orders/${id}`,
    CREATE_ORDER: '/orders',
    UPDATE_ORDER: (id) => `/orders/${id}`,
    CANCEL_ORDER: (id) => `/orders/${id}/cancel`,
    // Riders
    RIDERS: '/riders',
    RIDER_BY_ID: (id) => `/riders/${id}`,
    RIDER_AVAILABILITY: (id) => `/riders/${id}/availability`,
    // Merchants
    MERCHANTS: '/merchants',
    MERCHANT_BY_ID: (id) => `/merchants/${id}`,
    // Analytics
    DASHBOARD_KPIs: '/analytics/dashboard',
    ORDERS_METRICS: '/analytics/orders/metrics',
    RIDERS_PERFORMANCE: '/analytics/riders/performance',
    // Dispatch
    UNASSIGNED_ORDERS: '/dispatch/unassigned',
    AVAILABLE_RIDERS: '/dispatch/available-riders',
    ASSIGN_RIDER: '/dispatch/assign',
    // Tracking
    ORDER_TRACKING: (id) => `/tracking/orders/${id}`,
};
export const ORDER_STATUSES = {
    PENDING: 'Pending',
    ASSIGNED: 'Assigned',
    ACCEPTED: 'Accepted',
    PICKED_UP: 'Picked Up',
    IN_TRANSIT: 'In Transit',
    ARRIVED: 'Arrived',
    DELIVERED: 'Delivered',
    CANCELLED: 'Cancelled',
};
export const RIDER_STATUSES = {
    OFFLINE: 'Offline',
    ONLINE: 'Online',
    BUSY: 'Busy',
    SUSPENDED: 'Suspended',
};
export const ROLES = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    MERCHANT_ADMIN: 'MERCHANT_ADMIN',
    DISPATCHER: 'DISPATCHER',
    RIDER: 'RIDER',
    CUSTOMER: 'CUSTOMER',
};
