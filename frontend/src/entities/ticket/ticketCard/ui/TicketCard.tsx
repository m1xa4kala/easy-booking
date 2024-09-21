import React from 'react'
import { Ticket } from '../../ticketList/model/types'
import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'

import './ticketCard.scss'
import { formatDate } from '@/shared/helpers'

type TicketCardProps = {
  ticket: Ticket
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const navigate = useNavigate()

  const departureTime = formatDate(ticket.departureTime)
  const arrivalTime = formatDate(ticket.arrivalTime)

  const onClickHandler = () => {
    navigate('/ticket/' + ticket.id)
  }
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
        <Button onClick={onClickHandler}>{ticket.price} ₽</Button>
      </div>
    </div>
  )
}
