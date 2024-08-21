import { Outlet } from 'react-router-dom'

export const DashboardPage = () => {
  return (
    <div>
      <h2>Admin Page</h2>
      <Outlet />
    </div>
  )
}
