import { DashboardNav } from '@/widgets/dashboardNav'
import { Outlet } from 'react-router-dom'

export const DashboardPage = () => {
  return (
    <Box>
      <Typography variant='h2'>Admin Page</Typography>
      <DashboardNav />
      <Outlet />
    </Box>
  )
}
