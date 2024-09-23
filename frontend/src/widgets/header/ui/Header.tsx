import { NavLink } from 'react-router-dom'
import { LogoSvg } from '@/shared/assets'
import { ToggleSidebar } from '@/features/toggleSidebar'
import { Sidebar } from '../sidebar'
import { SwitchTheme } from '@/features/switchTheme'
import { Container, Navigation } from '@/shared/ui'

import './Header.scss'

export const Header = () => {
  return (
    <>
      <header className='header'>
        <Container className='header__container'>
          <NavLink to={'/'} color='#fff' className='header__logo'>
            <LogoSvg width={40} height={40} />
          </NavLink>
          <NavLink to={'/'} color='#fff' className='header__title'>
            <h1>Easy Booking</h1>
          </NavLink>
          <div className='header__navigation'>
            <Navigation />
          </div>
          <div className='header__theme-toggle'>
            <SwitchTheme />
          </div>
          <div className='header__sidebar-toggle'>
            <ToggleSidebar />
          </div>
        </Container>
      </header>
      <Sidebar />
    </>
  )
}
