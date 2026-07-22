import { Box, Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { ridersAPI } from '@/api/riders'
import DataTable from '@/components/common/DataTable'
import Loading from '@/components/common/Loading'
import EmptyState from '@/components/common/EmptyState'
import { Rider } from '@/types'

export default function Riders() {
  const { data: riders, isLoading } = useQuery({
    queryKey: ['riders'],
    queryFn: async () => {
      const response = await ridersAPI.getAll()
      return response.data
    },
  })

  if (isLoading) return <Loading />

  const columns = [
    { id: 'name' as const, label: 'Name' },
    { id: 'email' as const, label: 'Email' },
    { id: 'status' as const, label: 'Status' },
    { id: 'rating' as const, label: 'Rating' },
  ]

  if (!riders || riders.length === 0) {
    return (
      <EmptyState
        title="No riders found"
        description="Add your first rider to get started"
        actionLabel="Add Rider"
      />
    )
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight={700}>
          Riders
        </Typography>
        <Button variant="contained">Add Rider</Button>
      </Box>
      <DataTable columns={columns} rows={riders} rowKey="id" />
    </Box>
  )
}
