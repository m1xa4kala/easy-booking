import React from 'react'
import { TicketList } from '@/entities/ticket'
import { fetchTicketList } from '@/entities/ticket'
import { useAppDispatch, useAppSelector } from '@/shared/lib'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const tickets = useAppSelector((state) => state.tickets.tickets)

  React.useEffect(() => {
    dispatch(fetchTicketList())
  }, [dispatch])

  return (
    <div>
      <TicketList tickets={tickets} />
    </div>
  )
}
