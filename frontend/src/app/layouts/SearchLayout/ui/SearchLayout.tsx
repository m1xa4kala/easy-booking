import { Outlet } from 'react-router-dom'
import { SearchForm } from '@/features/searchForm'
import { Container } from '@/shared/ui'

export const SearchLayout = () => {
  return (
    <Container>
      <SearchForm />
      <Outlet />
    </Container>
  )
}
