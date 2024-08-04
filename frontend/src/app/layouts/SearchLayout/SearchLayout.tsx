import { Search } from '@/features/search'
import { Outlet } from 'react-router-dom'

export const SearchLayout = () => {
	return (
		<>
			<Search />
			<Outlet />
		</>
	)
}
