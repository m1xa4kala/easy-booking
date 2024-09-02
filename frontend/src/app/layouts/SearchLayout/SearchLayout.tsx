import { Outlet } from 'react-router-dom'
import { SearchForm } from '@/features/searchForm'

export const SearchLayout = () => {
  return (
    <>
      <SearchForm />
      <Outlet />
    </>
  )
}
