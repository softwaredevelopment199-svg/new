import { CircularProgress, Box } from '@mui/material'

interface LoadingProps {
  fullScreen?: boolean
  size?: number
}

export default function Loading({ fullScreen = false, size = 40 }: LoadingProps) {
  if (fullScreen) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress size={size} />
      </Box>
    )
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={3}>
      <CircularProgress size={size} />
    </Box>
  )
}
