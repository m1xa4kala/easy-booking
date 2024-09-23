import React from 'react'
import { DashboardTable } from '@/widgets/dashboardTable'
import { fetchTicketList, selectTickets } from '@/entities/ticket'
import { useAppDispatch, useAppSelector } from '@/shared/lib'

import './DashboardTickets.scss'

export const DashboardTickets = () => {
  const dispatch = useAppDispatch()
  const ticketsState = useAppSelector(selectTickets)
  const columns = [
    'id',
    'origin',
    'destination',
    'airline',
    'price',
    'departureTime',
    'arrivalTime',
    'duration',
    'transfersCount',
    'transferDuration',
    'placesCount',
    'bus',
  ]

  React.useEffect(() => {
    dispatch(fetchTicketList())
  }, [dispatch])
  return (
    <div>
      <DashboardTable columns={columns} rows={ticketsState.tickets} />
    </div>
  )
}
