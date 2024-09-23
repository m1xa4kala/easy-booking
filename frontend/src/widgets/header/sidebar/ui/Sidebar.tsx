import React from 'react'
import { useAppSelector } from '@/shared/lib'
import { selectIsNavOpen } from '@/features/toggleSidebar'
import { SwitchTheme } from '@/features/switchTheme'
import { Navigation } from '@/shared/ui'

import './Sidebar.scss'

export const Sidebar: React.FC = () => {
  const isNavOpen = useAppSelector(selectIsNavOpen)
  return (
    <aside className={`${isNavOpen ? 'sidebar show_sidebar' : 'sidebar'}`}>
      <div className='sidebar_container'>
        <div className='sidebar__switch-theme'>
          <SwitchTheme />
        </div>
        <div className='sidebar__navigation'>
          <Navigation />
        </div>
      </div>
    </aside>
  )
}
