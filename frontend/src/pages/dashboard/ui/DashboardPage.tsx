import { DashboardNav } from '@/widgets/dashboardNav'
import { Outlet } from 'react-router-dom'

import './DashboardPage.scss'

export const DashboardPage = () => {
  return (
    <div className='dashboard-page'>
      <div className='dashboard-page__nav'>
        <DashboardNav />
      </div>
      <div className='dashboard-page__content'>
        <Outlet />
      </div>
    </div>
  )
}
