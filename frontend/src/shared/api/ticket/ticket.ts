import { instance } from '../base'

export const getTickets = async () => {
  const response = await instance.get('tickets')
  return response.data
}

export const getTicketById = async (ticketId: string) => {
  const response = await instance.get(`tickets/${ticketId}`)
  return response.data
}
