import { instance } from '../base'

export const getTickets = async () => {
  const response = await instance.get('tickets')
  return response.data
}
