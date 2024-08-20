import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import { DashboardPage } from '@/pages/dashboard'
import { HomePage } from '@/pages/home'
import { Profile } from '@/pages/profile'
import { Flights } from '@/widgets/flights'
import { NotFoundPage } from '@/pages/notFound'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/admin',
        element: <DashboardPage />,
        children: [
          {
            path: '/admin/flights',
            element: <Flights />,
          },
        ],
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
