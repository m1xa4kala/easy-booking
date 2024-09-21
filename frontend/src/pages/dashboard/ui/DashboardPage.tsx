import { Container } from '@/shared/ui'
import { DashboardNav } from '@/widgets/dashboardNav'
import { Outlet } from 'react-router-dom'

export const DashboardPage = () => {
  return (
    <div>
      <Container>
        <DashboardNav />
        <Outlet />
      </Container>
    </div>
  )
}
