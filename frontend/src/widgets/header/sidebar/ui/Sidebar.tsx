import React from 'react'
import { useAppSelector } from '@/shared/lib'
import { selectIsNavOpen } from '@/features/toggleSidebar'
import { SidebarContent } from './SidebarContent'

import './sidebar.scss'

export const Sidebar: React.FC = () => {
  const isNavOpen = useAppSelector(selectIsNavOpen)
  return (
    <aside className={`${isNavOpen ? 'sidebar show_sidebar' : 'sidebar'}`}>
      <div className="sidebar_container">
        <SidebarContent />
      </div>
    </aside>
  )
}
