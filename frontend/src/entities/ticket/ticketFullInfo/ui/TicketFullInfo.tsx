import React from 'react'
import { Ticket } from '../../ticketList/model/types'

type TicketFullInfoProps = {
  ticket: Ticket
}
export const TicketFullInfo: React.FC<TicketFullInfoProps> = ({ ticket }) => {
  return (
    <div>
      <h1>{ticket.id}</h1>
      <h2>{ticket.from}</h2>
      <h2>{ticket.to}</h2>
    </div>
  )
}
