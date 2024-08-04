import { selectIsNavOpen } from '../model/selectors'
import { useAppSelector } from '@/shared/lib/store'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

export const Navigation = () => {
	const isNavOpen = useAppSelector(selectIsNavOpen)
	return (
		<nav>
			<Header />
			<Sidebar isNavOpen={isNavOpen} />
		</nav>
	)
}
