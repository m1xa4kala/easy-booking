import React from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { toggleNav } from '../model/navSlice'
import { selectIsNavOpen } from '../model/selectors'
import './toggelSidebar.scss'

export const ToggleSidebar: React.FC = () => {
	const dispatch = useAppDispatch()
	const isNavOpen = useAppSelector(selectIsNavOpen)

	const handleDrawerToggle = () => {
		dispatch(toggleNav())
	}
	return (
		<div className={isNavOpen ? 'menu open' : 'menu'} onClick={handleDrawerToggle}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
