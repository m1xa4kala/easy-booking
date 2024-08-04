import { AppBar, Box, Container, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { LogoSvgIcon } from '@/shared/assets/svg/Logo'
import MenuIcon from '@mui/icons-material/Menu'
import { useAppDispatch } from '@/shared/lib/store'
import { toggleNav } from '@/widgets/navigation/model/navSlice'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	const dispatch = useAppDispatch()
	const handleDrawerToggle = () => {
		dispatch(toggleNav())
	}
	return (
		<AppBar position='sticky' component={'header'}>
			<Container maxWidth='xl'>
				<Box display={'flex'} alignItems={'center'} justifyContent={{ xs: 'space-between', sm: 'normal' }}>
					<Link component={NavLink} to={'/'}>
						<LogoSvgIcon sx={{ width: 40, height: 40, mr: 2, display: { xs: 'none', sm: 'block' } }} />
					</Link>
					<Link component={NavLink} underline='none' p={'0'} m={'0'} to={'/'} color={'#fff'}>
						<Typography variant='h4' component={'h1'} sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
							Easy Booking
						</Typography>
					</Link>

					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, p: 0, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</Box>
			</Container>
		</AppBar>
	)
}
