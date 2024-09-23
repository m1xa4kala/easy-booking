import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Главная</NavLink>
        </li>
        <li>
          <NavLink to='/admin'>Админ</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Профиль</NavLink>
        </li>
        <li>
          <NavLink to='/favorits'>Избранное</NavLink>
        </li>
      </ul>
    </nav>
  )
}
