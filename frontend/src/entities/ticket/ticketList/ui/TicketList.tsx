import { TicketCard } from '../../ticketCard/ui/TicketCard'
import { Ticket } from '../model/types'

type TicketListProps = {
  tickets: Ticket[]
}
export const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <div className='ticketList'>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
