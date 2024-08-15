import React from 'react'
import './ticketCard.scss'

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
          <h3 className='departure__point'>{origin}</h3>
          <h4 className='departure__time'>{departureTime}</h4>
        </div>
        <div className='ticket__card-destination'>
          <h3 className='destination__point'>{destination}</h3>
          <h4 className='destination__time'>{arrivalTime}</h4>
        </div>
      </div>
      <div className='ticket__card-info'>
        <span className='info__duration'>В пути {duration}</span>
        <span className='info__bus'>Автобус: {bus}</span>
        <span className='info__airline'>Перевозчик: {airline}</span>
      </div>
      <div className='ticket__card-order'>
        <span className='order__places'>Мест осталось: {placesCount}</span>
        <button className='order__button'>{price} ₽</button>
      </div>
    </div>
  )
}
