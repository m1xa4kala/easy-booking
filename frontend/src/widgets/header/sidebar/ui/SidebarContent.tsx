import { SwitchTheme } from '@/features/switchTheme'
import { Navigation } from '@/shared/ui/Navigation'
import React from 'react'

export const SidebarContent: React.FC = () => {
  return (
    <div className='sidebar__content'>
      <SwitchTheme />
      <Navigation />
    </div>
  )
}
