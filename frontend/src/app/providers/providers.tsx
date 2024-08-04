import React from 'react'
import { Provider } from 'react-redux'
import store from '@/app/store'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from '../routers'

export const Providers: React.FC = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	)
}
