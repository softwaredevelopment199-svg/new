import { useState, useEffect } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material'

interface Order {
  id: string
  orderNumber: string
  recipientName: string
  deliveryAddress: string
  totalAmount: number
  status: string
}

type ChipColor = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'

const statusColors: Record<string, ChipColor> = {
  PENDING: 'warning',
  ASSIGNED: 'primary',
  PICKED_UP: 'primary',
  IN_TRANSIT: 'secondary',
  ARRIVED: 'info',
  DELIVERED: 'success',
  CANCELLED: 'error',
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-001',
    recipientName: 'John Kimani',
    deliveryAddress: 'Westlands, Nairobi',
    totalAmount: 1500,
    status: 'PENDING',
  },
  {
    id: '2',
    orderNumber: 'ORD-002',
    recipientName: 'Jane Mwangi',
    deliveryAddress: 'Kilimani, Nairobi',
    totalAmount: 2200,
    status: 'DELIVERED',
  },
]

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Mock data
        setOrders(mockOrders)
      } catch (err) {
        console.error('Failed to fetch orders:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrders()
  }, [])

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Orders
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#FF1493' }}>
          Create Order
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Delivery Address</TableCell>
              <TableCell>Amount (KSh)</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell sx={{ fontWeight: 'bold' }}>
                  {order.orderNumber}
                </TableCell>
                <TableCell>{order.recipientName}</TableCell>
                <TableCell>{order.deliveryAddress}</TableCell>
                <TableCell>{order.totalAmount.toLocaleString()}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={statusColors[order.status] || 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Button size="small" variant="outlined">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}