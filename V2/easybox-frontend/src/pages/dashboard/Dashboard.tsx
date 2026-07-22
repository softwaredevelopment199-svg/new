import { useState, useEffect } from 'react'
import { Box, Card, CardContent, Typography, CircularProgress, Alert, Grid } from '@mui/material'
import { LocalShipping, Person, TrendingUp } from '@mui/icons-material'
import type { ReactNode } from 'react'

interface KPI {
  ordersToday: number
  deliveredToday: number
  activeRiders: number
  revenue: number
}

interface KPICardProps {
  icon: ReactNode
  label: string
  value: number | string
  unit?: string
}

function KPICard({ icon, label, value, unit }: KPICardProps) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ color: '#FF1493' }}>
            {icon}
          </Box>
          <Box>
            <Typography color="textSecondary" gutterBottom>
              {label}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {value} {unit}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default function Dashboard() {
  const [kpis, setKpis] = useState<KPI | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        // Mock data - replace with actual API call
        setKpis({
          ordersToday: 1250,
          deliveredToday: 1030,
          activeRiders: 76,
          revenue: 625400,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load dashboard')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboard()
  }, [])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Dashboard
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {kpis && (
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={3}>
            <KPICard
              icon={<LocalShipping sx={{ fontSize: 40 }} />}
              label="Orders Today"
              value={kpis.ordersToday}
            />
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <KPICard
              icon={<LocalShipping sx={{ fontSize: 40 }} />}
              label="Delivered Today"
              value={kpis.deliveredToday}
            />
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <KPICard
              icon={<Person sx={{ fontSize: 40 }} />}
              label="Active Riders"
              value={kpis.activeRiders}
            />
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <KPICard
              icon={<TrendingUp sx={{ fontSize: 40 }} />}
              label="Revenue"
              value={kpis.revenue}
              unit="KSh"
            />
          </Grid>
        </Grid>
      )}
    </Box>
  )
}