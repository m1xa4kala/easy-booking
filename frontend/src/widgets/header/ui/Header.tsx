import { NavLink } from 'react-router-dom'
import { LogoSvg } from '@/shared/assets'
import { ToggleSidebar } from '@/features/toggleSidebar'
import { Sidebar } from '../sidebar'
import './header.scss'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <NavLink to={'/'} color="#fff" className="header__logo">
            <LogoSvg width={40} height={40} />
          </NavLink>
          <NavLink to={'/'} color="#fff" className="header__title">
            <h1>Easy Booking</h1>
          </NavLink>
          <div className="header__toggle">
            <ToggleSidebar />
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  )
}
