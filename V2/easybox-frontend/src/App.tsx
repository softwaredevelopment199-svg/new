import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { theme } from '@/styles/theme'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import MainLayout from '@/layouts/MainLayout'
import Login from '@/pages/Login'
import Dashboard from '@/pages/dashboard/Dashboard'
import Orders from '@/pages/orders/Orders'
import Riders from '@/pages/riders/Riders'
import Merchants from '@/pages/merchants/Merchants'
import Settings from '@/pages/settings/Settings'

const queryClient = new QueryClient()

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}
                <Route
                  element={
                    <ProtectedRoute>
                      <MainLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/riders" element={<Riders />} />
                  <Route path="/merchants" element={<Merchants />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>

                {/* Redirect root to dashboard or login */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </Router>
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}
