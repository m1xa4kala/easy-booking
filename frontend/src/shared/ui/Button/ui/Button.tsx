import React from 'react'
import './Button.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'outline'
}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  const variant =
    props.variant === 'outline' ? 'button__outline' : 'button__primary'
  const className = `${variant} ${props.className}`
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
