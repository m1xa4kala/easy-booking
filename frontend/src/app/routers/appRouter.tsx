import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import { SearchLayout } from '../layouts/SearchLayout'
import { DashboardPage } from '@/pages/dashboard'
import { HomePage } from '@/pages/home'
import { Profile } from '@/pages/profile'
import { Flights } from '@/widgets/flights'
import { NotFoundPage } from '@/pages/notFound'
import { SearchResults } from '@/widgets/searchResults'
import { TicketInfo } from '@/pages/ticketInfo'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SearchLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/search',
            element: <SearchResults />,
          },
        ],
      },
      {
        path: '/ticket/:ticketId',
        element: <TicketInfo />,
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
