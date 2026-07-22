# Easybox Frontend Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Backend API running on `http://localhost:3000`

## Installation Steps

### 1. Install Dependencies
```bash
cd V2/easybox-frontend
npm install
```

### 2. Create Environment File
```bash
cp .env.example .env.local
```

### 3. Configure Environment Variables
Edit `.env.local` with your actual values:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api/v1
VITE_WS_URL=ws://localhost:3000

# Mapbox Configuration (get free token from https://www.mapbox.com/)
VITE_MAPBOX_TOKEN=your_actual_mapbox_token_here

# App Configuration
VITE_APP_NAME=Easybox Logistics
VITE_APP_ENV=development

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_LIVE_TRACKING=true
VITE_ENABLE_AI_DISPATCH=false
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Tests
```bash
npm run test
```

### Run Tests with UI
```bash
npm run test:ui
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Lint Code
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

## Backend API Requirements

Your backend must provide these endpoints:

### Authentication
- `POST /api/v1/auth/login` - User login
  - Request: `{ email, password }`
  - Response: `{ user: { id, email, name, role }, token }`

### Dashboard
- `GET /api/v1/dashboard/stats` - Dashboard statistics
  - Response: `{ totalOrders, activeOrders, totalDelivered, totalRevenue, activeRiders, activeMerchants }`
- `GET /api/v1/dashboard/revenue` - Revenue chart data
- `GET /api/v1/dashboard/orders` - Orders chart data

### Orders
- `GET /api/v1/orders` - Get all orders
- `GET /api/v1/orders/:id` - Get order by ID
- `POST /api/v1/orders` - Create new order
- `PUT /api/v1/orders/:id` - Update order
- `DELETE /api/v1/orders/:id` - Delete order
- `PATCH /api/v1/orders/:id/status` - Update order status

### Riders
- `GET /api/v1/riders` - Get all riders
- `GET /api/v1/riders/:id` - Get rider by ID
- `POST /api/v1/riders` - Create new rider
- `PUT /api/v1/riders/:id` - Update rider
- `DELETE /api/v1/riders/:id` - Delete rider

### Merchants
- `GET /api/v1/merchants` - Get all merchants
- `GET /api/v1/merchants/:id` - Get merchant by ID
- `POST /api/v1/merchants` - Create new merchant
- `PUT /api/v1/merchants/:id` - Update merchant
- `DELETE /api/v1/merchants/:id` - Delete merchant

## Authentication Flow

1. User navigates to `/login`
2. Enters email and password
3. Frontend sends POST request to `/api/v1/auth/login`
4. Backend returns user data and JWT token
5. Token is stored in Zustand store (persisted to localStorage)
6. User is redirected to `/dashboard`
7. All subsequent API requests include `Authorization: Bearer <token>` header
8. If token expires (401), user is redirected to login

## Project Structure

```
V2/easybox-frontend/
├── src/
│   ├── api/              # API client and endpoints
│   ├── components/       # Reusable components
│   │   ├── common/       # Common components (Loading, DataTable, etc.)
│   │   └── layout/       # Layout components (Sidebar, Navbar)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components
│   ├── store/            # Zustand stores (auth, UI)
│   ├── styles/           # Global styles and theme
│   ├── types/            # TypeScript interfaces
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Vite environment types
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── .env.example          # Environment variables template
└── README.md             # Project README
```

## Key Features

✅ **Protected Routes** - Automatic redirection to login for unauthenticated users
✅ **State Management** - Zustand for auth and UI state
✅ **Data Fetching** - TanStack React Query with caching
✅ **Type Safety** - Full TypeScript support
✅ **Material-UI** - Professional UI components
✅ **Error Handling** - Global error boundary
✅ **Loading States** - Consistent loading indicators
✅ **Data Tables** - Pagination and sorting
✅ **Responsive Design** - Mobile-friendly layout
✅ **Dark Theme Ready** - Theme configuration included

## Troubleshooting

### Port Already in Use
```bash
# If port 5173 is in use, modify vite.config.ts:
# server: { port: 3000 }
```

### CORS Issues
Ensure your backend has CORS enabled for `http://localhost:5173`

### Module Not Found Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### TypeScript Errors
Run type checking:
```bash
npx tsc --noEmit
```

## Support

For issues or questions, please refer to:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Material-UI Documentation](https://mui.com)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
