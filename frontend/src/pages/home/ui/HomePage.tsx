import React from 'react'
import { TicketList } from '@/entities/ticket'
import { fetchTicketList } from '@/entities/ticket'
import { useAppDispatch, useAppSelector } from '@/shared/lib'

import './HomePage.scss'
import { FiltersBar } from '@/widgets/filtersBar'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const tickets = useAppSelector((state) => state.tickets.tickets)

  React.useEffect(() => {
    dispatch(fetchTicketList())
  }, [dispatch])

  return (
    <div className='home-page'>
      <FiltersBar />
      <TicketList tickets={tickets} />
    </div>
  )
}
