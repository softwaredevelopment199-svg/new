import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'
import { useUIStore } from '@/store/uiStore'

export default function MainLayout() {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen)

  return (
    <Box display="flex">
      <Sidebar open={sidebarOpen} />
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        sx={{
          transition: 'margin 0.3s ease',
          marginLeft: sidebarOpen ? 0 : '-280px',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            backgroundColor: '#f5f5f5',
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
