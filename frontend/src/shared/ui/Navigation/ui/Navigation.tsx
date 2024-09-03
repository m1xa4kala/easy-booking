import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.scss'

export const Navigation: React.FC = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <Link to={'/'} className='navigation__link'>
            Home
          </Link>
        </li>
        <li className='navigation__item'>
          <Link to={'/admin'} className='navigation__link'>
            Dashboard
          </Link>
        </li>
        <li className='navigation__item'>
          <Link to={'/profile'} className='navigation__link'>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  )
}
