import React from 'react'
import './ticketCard.scss'
import { Button } from '@/shared/ui'

type TicketCardProps = {
  price: number
  airline: string
  origin: string
  destination: string
  departureTime: string
  arrivalTime: string
  duration: string
  transfersCount: number
  transferDuration: string
  bus: string
  placesCount: number
}

export const TicketCard: React.FC<TicketCardProps> = ({
  bus,
  price,
  airline,
  origin,
  destination,
  departureTime,
  arrivalTime,
  duration,
  placesCount,
}) => {
  return (
    <div className='ticket__card'>
      <div className='ticket__card-header'>
        <div className='ticket__card-departure'>
          <h2 className='departure__point'>{origin}</h2>
          <h3 className='departure__time'>{departureTime}</h3>
        </div>
        <div className='ticket__card-destination'>
          <h2 className='destination__point'>{destination}</h2>
          <h3 className='destination__time'>{arrivalTime}</h3>
        </div>
      </div>
      <div className='ticket__card-info'>
        <span className='info__duration'>В пути {duration}</span>
        <span className='info__bus'>Автобус: {bus}</span>
        <span className='info__airline'>Перевозчик: {airline}</span>
      </div>
      <div className='ticket__card-order'>
        <span className='order__places'>Мест осталось: {placesCount}</span>
        <Button>{price} ₽</Button>
      </div>
    </div>
  )
}
