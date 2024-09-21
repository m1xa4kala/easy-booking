import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashboardNav.scss'

export const DashboardNav: React.FC = () => {
  return (
    <div className='dashboard-nav'>
      <ul className='dashboard-nav__list'>
        <li className='dashboard-nav__item'>
          <NavLink to={'/admin/flights'}>Flights</NavLink>
        </li>
        <li className='dashboard-nav__item'>
          <NavLink to={'/admin/tickets'}>Tickets</NavLink>
        </li>
        <li className='dashboard-nav__item'>
          <NavLink to={'/admin/users'}>Users</NavLink>
        </li>
      </ul>
    </div>
  )
}
