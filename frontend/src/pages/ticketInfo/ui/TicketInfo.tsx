import React from 'react'
import { useParams } from 'react-router-dom'
import './TicketInfo.scss'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { fetchTicketInfo, TicketFullInfo } from '@/entities/ticket'
export const TicketInfo = () => {
  const { ticketId } = useParams()
  const dispatch = useAppDispatch()
  const ticket = useAppSelector((state) => state.ticketInfo.ticket)
  React.useEffect(() => {
    const id = ticketId ? ticketId : ''
    dispatch(fetchTicketInfo(id))
  }, [dispatch, ticketId])
  console.log(ticket)
  return <div>{ticket && <TicketFullInfo ticket={ticket} />}</div>
}
