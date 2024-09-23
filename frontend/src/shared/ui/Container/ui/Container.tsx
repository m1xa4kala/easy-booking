import React from 'react'
import './Container.scss'
type ContainerProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>
export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <div className={`ui-container ${props.className}`}>{children}</div>
}
