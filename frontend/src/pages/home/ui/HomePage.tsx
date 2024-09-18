import React from 'react'
import { TicketList } from '@/entities/ticket'
import { fetchTicketList } from '@/entities/ticket'
import { useAppDispatch, useAppSelector } from '@/shared/lib'

export const HomePage = () => {
  const dispath = useAppDispatch()
  const tickets = useAppSelector((state) => state.tickets.tickets)

  React.useEffect(() => {
    dispath(fetchTicketList())
  }, [])

  return (
    <div>
      <TicketList tickets={tickets} />
    </div>
  )
}
