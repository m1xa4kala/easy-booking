import { getTickets } from '@/shared/api/ticket'
import { ErrorType } from '@/shared/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Ticket } from './types'

export const fetchTicketList = createAsyncThunk<
  Ticket[],
  undefined,
  { rejectValue: ErrorType }
>('ticket/fetchTicketList', async (_, thunkApi) => {
  try {
    const response = await getTickets()
    return response
  } catch (err) {
    return thunkApi.rejectWithValue(err as ErrorType)
  }
})
