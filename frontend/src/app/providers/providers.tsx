import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from '../store/store'
import { appRouter } from '../routers'

export const Providers: React.FC = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	)
}
