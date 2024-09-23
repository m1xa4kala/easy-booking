import { configureStore } from '@reduxjs/toolkit'
import { navSlice } from '@/features/toggleSidebar'
import { authSlice } from '@/features/auth'
import { themeSlice } from '@/features/switchTheme'
import { ticketListSlice } from '@/entities/ticket'
import { ticketInfoSlice } from '@/entities/ticket'

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    tickets: ticketListSlice.reducer,
    ticketInfo: ticketInfoSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
