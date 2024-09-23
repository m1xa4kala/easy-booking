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
        <SwitchTheme />
        <Navigation />
      </div>
    </aside>
  )
}
