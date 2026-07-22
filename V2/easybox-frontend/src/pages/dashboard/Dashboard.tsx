import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { dashboardAPI } from '@/api/dashboard'
import Loading from '@/components/common/Loading'

export default function Dashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const response = await dashboardAPI.getStats()
      return response.data
    },
  })

  if (isLoading) return <Loading />

  const statCards = [
    {
      title: 'Total Orders',
      value: stats?.totalOrders || 0,
      color: '#863bff',
    },
    {
      title: 'Active Orders',
      value: stats?.activeOrders || 0,
      color: '#47bfff',
    },
    {
      title: 'Delivered',
      value: stats?.totalDelivered || 0,
      color: '#00c853',
    },
    {
      title: 'Revenue',
      value: `KES ${stats?.totalRevenue || 0}`,
      color: '#ffa500',
    },
  ]

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {statCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {card.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: card.color, fontWeight: 700 }}
                >
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
