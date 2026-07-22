import { Box, Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { ordersAPI } from '@/api/orders'
import DataTable from '@/components/common/DataTable'
import Loading from '@/components/common/Loading'
import EmptyState from '@/components/common/EmptyState'
import { Order } from '@/types'

export default function Orders() {
  const { data: orders, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const response = await ordersAPI.getAll()
      return response.data
    },
  })

  if (isLoading) return <Loading />

  const columns = [
    { id: 'orderNumber' as const, label: 'Order Number' },
    { id: 'status' as const, label: 'Status' },
    { id: 'amount' as const, label: 'Amount' },
    { id: 'createdAt' as const, label: 'Created At' },
  ]

  if (!orders || orders.length === 0) {
    return (
      <EmptyState
        title="No orders found"
        description="Create your first order to get started"
        actionLabel="Create Order"
      />
    )
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight={700}>
          Orders
        </Typography>
        <Button variant="contained">Create Order</Button>
      </Box>
      <DataTable columns={columns} rows={orders} rowKey="id" />
    </Box>
  )
}
