import { Outlet } from 'react-router-dom'
import { SearchForm } from '@/features/searchForm'
import './SearchLayout.scss'

export const SearchLayout = () => {
  return (
    <>
      <div className='layout__container'>
        <SearchForm />
        <Outlet />
      </div>
    </>
  )
}
