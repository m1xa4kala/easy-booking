import { NavLink } from 'react-router-dom'

import './Navigation.scss'

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to='/'>Главная</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to='/admin'>Админ</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to='/profile'>Профиль</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to='/favorits'>Избранное</NavLink>
        </li>
      </ul>
    </nav>
  )
}
