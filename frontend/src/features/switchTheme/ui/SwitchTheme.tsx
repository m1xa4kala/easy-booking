import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { setTheme } from '../model/themeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './SwitchTheme.scss'

export const SwitchTheme: React.FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme)

  const handleToggle = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className='theme-toggle'>
      <button
        className='theme-toggle-button'
        aria-label='Toggle theme'
        onClick={handleToggle}
      >
        <span className='theme-slider'></span>
        <FontAwesomeIcon
          icon={faSun}
          id='sun-icon'
          color='#ffdd40'
          width={15}
        />
        <FontAwesomeIcon
          icon={faMoon}
          id='moon-icon'
          color='#2458c6'
          width={15}
        />
      </button>
    </div>
  )
}
