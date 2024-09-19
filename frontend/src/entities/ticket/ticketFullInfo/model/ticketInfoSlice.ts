import { createSlice } from '@reduxjs/toolkit'
import { fetchTicketInfo } from './ticketInfoThunk'
import { ErrorType } from '@/shared/types'
import { Ticket } from '../../ticketList/model/types'

type InitialStateType = {
  ticket: null | Ticket
  isLoading: boolean
  error: null | ErrorType
}
const initialState: InitialStateType = {
  ticket: null,
  isLoading: false,
  error: null,
}

export const ticketInfoSlice = createSlice({
  name: 'ticketInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketInfo.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchTicketInfo.fulfilled, (state, action) => {
        state.isLoading = false
        state.ticket = action.payload
      })
      .addCase(fetchTicketInfo.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ?? null
      })
  },
})
