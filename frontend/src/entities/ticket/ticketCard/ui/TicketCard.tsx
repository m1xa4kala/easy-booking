import React from 'react'
import './ticketCard.scss'
import { Button } from '@/shared/ui'
import { Ticket } from '../../ticketList/model/types'

type TicketCardProps = {
  ticket: Ticket
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const departureTime = new Date(ticket.departureTime).toLocaleTimeString(
    'ru-RU',
    {
      hour: '2-digit',
      minute: '2-digit',
    }
  )
  const arrivalTime = new Date(ticket.arrivalTime).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return (
    <div className='ticket__card'>
      <div className='ticket__card-header'>
        <div className='ticket__card-departure'>
          <h2 className='departure__point'>{ticket.origin}</h2>
          <h3 className='departure__time'>{departureTime}</h3>
        </div>
        <div className='ticket__card-destination'>
          <h2 className='destination__point'>{ticket.destination}</h2>
          <h3 className='destination__time'>{arrivalTime}</h3>
        </div>
      </div>
      <div className='ticket__card-info'>
        <span className='info__duration'>В пути {ticket.duration}</span>
        <span className='info__bus'>Автобус: {ticket.bus}</span>
        <span className='info__airline'>Перевозчик: {ticket.airline}</span>
      </div>
      <div className='ticket__card-order'>
        <span className='order__places'>
          Мест осталось: {ticket.placesCount}
        </span>
        <Button>{ticket.price} ₽</Button>
      </div>
    </div>
  )
}
