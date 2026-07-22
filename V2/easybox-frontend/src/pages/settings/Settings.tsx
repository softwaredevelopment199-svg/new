import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material'

export default function Settings() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Settings
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Account Settings
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Profile"
                secondary="Manage your account profile"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Notifications"
                secondary="Configure notification preferences"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Security"
                secondary="Update password and security settings"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}
