import { Outlet } from 'react-router-dom'
import { Search } from '@/features/search'

export const SearchLayout = () => {
	return (
		<>
			<Search />
			<Outlet />
		</>
	)
}
