import { getTicketById } from '@/shared/api/ticket'
import { ErrorType } from '@/shared/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Ticket } from '../../ticketList/model/types'

export const fetchTicketInfo = createAsyncThunk<
  Ticket,
  string,
  { rejectValue: ErrorType }
>('ticketInfo/fetchTicketInfo', async (ticketId: string, thunkApi) => {
  try {
    const response = await getTicketById(ticketId)
    return response
  } catch (err) {
    return thunkApi.rejectWithValue(err as ErrorType)
  }
})
