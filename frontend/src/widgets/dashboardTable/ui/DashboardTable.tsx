import { Ticket } from '@/entities/ticket'
import './DashboardTable.scss'
import { formatDate } from '@/shared/helpers'

type DashboardTableProps = {
  columns: string[]
  rows: Ticket[]
}
export const DashboardTable: React.FC<DashboardTableProps> = ({
  columns,
  rows,
}) => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const departureTime = formatDate(row.departureTime)
            const arrivalTime = formatDate(row.arrivalTime)

            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.origin}</td>
                <td>{row.destination}</td>
                <td>{row.airline}</td>
                <td>{row.price}</td>
                <td>{departureTime}</td>
                <td>{arrivalTime}</td>
                <td>{row.duration}</td>
                <td>{row.transfersCount}</td>
                <td>{row.transferDuration}</td>
                <td>{row.placesCount}</td>
                <td>{row.bus}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
