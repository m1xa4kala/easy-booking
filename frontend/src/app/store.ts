import { configureStore } from '@reduxjs/toolkit'
import { navSlice } from '@/widgets/navigation'

const store = configureStore({
	reducer: {
		nav: navSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
