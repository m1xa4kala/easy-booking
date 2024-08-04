import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/app/layouts/RootLayout'
import { Home } from '@/pages/home'
import { Admin } from '@/pages/admin'
import { Profile } from '@/pages/profile'

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/admin',
				element: <Admin />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
		],
	},
])
