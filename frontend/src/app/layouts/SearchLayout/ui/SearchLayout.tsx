import { Outlet } from 'react-router-dom'
import { SearchForm } from '@/features/searchForm'
import { Container } from '@/shared/ui'

import './SearchLayout.scss'
export const SearchLayout = () => {
  return (
    <Container>
      <div className='search-layout'>
        <SearchForm />
        <Outlet />
      </div>
    </Container>
  )
}
