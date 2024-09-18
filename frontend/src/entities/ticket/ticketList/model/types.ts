import { ErrorType } from '@/shared/types'

export type Ticket = {
  id: string
  airline: string
  price: number
  departureTime: string
  arrivalTime: string
  origin: string
  destination: string
  duration: string
  transfersCount: number
  transferDuration: string
  placesCount: number
  bus: string
}

export type TicketListState = {
  tickets: Ticket[] | []
  loading: boolean
  error: null | ErrorType
}
