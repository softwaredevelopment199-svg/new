import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { theme } from '@/styles/theme'
import Login from '@/pages/Login'
import Dashboard from '@/pages/dashboard/Dashboard'
import Orders from '@/pages/orders/Orders'
import Riders from '@/pages/riders/Riders'
import Merchants from '@/pages/merchants/Merchants'
import Settings from '@/pages/settings/Settings'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import MainLayout from '@/layouts/MainLayout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />

          {/* Protected */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="riders" element={<Riders />} />
            <Route path="merchants" element={<Merchants />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App