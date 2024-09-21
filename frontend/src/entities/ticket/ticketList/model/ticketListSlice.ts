import { createSlice } from '@reduxjs/toolkit'
import { fetchTicketList } from './ticketListThunk'
import { TicketListState } from './types'

const initialState: TicketListState = {
  tickets: [],
  loading: false,
  error: null,
}

export const ticketListSlice = createSlice({
  name: 'ticketList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketList.fulfilled, (state, action) => {
        state.tickets = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchTicketList.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTicketList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
  },
})

export default ticketListSlice.reducer
