import React from 'react'
import { Box, Drawer } from '@mui/material'
import { useAppDispatch } from '@/shared/lib/store'
import { toggleNav } from '@/widgets/navigation/model/navSlice'
import { NavLink } from 'react-router-dom'

interface ISidebarProps {
	isNavOpen: boolean
}
export const Sidebar: React.FC<ISidebarProps> = ({ isNavOpen }) => {
	const dispatch = useAppDispatch()
	const drawerWidth = 240
	const handleDrawerToggle = () => {
		dispatch(toggleNav())
	}
	return (
		<Drawer
			anchor='right'
			variant='temporary'
			open={isNavOpen}
			onClose={handleDrawerToggle}
			ModalProps={{
				keepMounted: true,
			}}
			sx={{
				display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
			}}
		>
			<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
				<NavLink to='/admin'>Admin</NavLink>
			</Box>
		</Drawer>
	)
}
