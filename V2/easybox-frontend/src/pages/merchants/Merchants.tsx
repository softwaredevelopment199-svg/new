import { Box, Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { merchantsAPI } from '@/api/merchants'
import DataTable from '@/components/common/DataTable'
import Loading from '@/components/common/Loading'
import EmptyState from '@/components/common/EmptyState'
import { Merchant } from '@/types'

export default function Merchants() {
  const { data: merchants, isLoading } = useQuery({
    queryKey: ['merchants'],
    queryFn: async () => {
      const response = await merchantsAPI.getAll()
      return response.data
    },
  })

  if (isLoading) return <Loading />

  const columns = [
    { id: 'businessName' as const, label: 'Business Name' },
    { id: 'email' as const, label: 'Email' },
    { id: 'status' as const, label: 'Status' },
    { id: 'totalOrders' as const, label: 'Total Orders' },
  ]

  if (!merchants || merchants.length === 0) {
    return (
      <EmptyState
        title="No merchants found"
        description="Add your first merchant to get started"
        actionLabel="Add Merchant"
      />
    )
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight={700}>
          Merchants
        </Typography>
        <Button variant="contained">Add Merchant</Button>
      </Box>
      <DataTable columns={columns} rows={merchants} rowKey="id" />
    </Box>
  )
}
