import { Outlet } from 'react-router-dom'
import { Footer } from '@/widgets/footer'
import { CssBaseline } from '@mui/material'
import { Navigation } from '@/widgets/navigation'

export const RootLayout = () => {
	return (
		<div>
			<CssBaseline />
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	)
}
