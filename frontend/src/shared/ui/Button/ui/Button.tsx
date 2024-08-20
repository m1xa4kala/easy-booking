import React from 'react'
import './Button.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className='button'>
      {children}
    </button>
  )
}
