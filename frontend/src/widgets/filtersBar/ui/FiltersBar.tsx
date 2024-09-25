import { Button } from '@/shared/ui'

import './FiltersBar.scss'

export const FiltersBar = () => {
  return (
    <div className='filters-bar'>
      <ul className='filters-list'>
        <li className='filters-list__item'>
          <Button variant='outline'>Цена</Button>
        </li>
        <li className='filters-list__item'>
          <Button variant='outline' className='filters-list__button'>
            Время в пути
          </Button>
        </li>
        <li className='filters-list__item'>
          <Button variant='outline' className='filters-list__button'>
            Перевозчик
          </Button>
        </li>
        <li className='filters-list__item'>
          <Button variant='outline' className='filters-list__button'>
            Тип
          </Button>
        </li>
        <li className='filters-list__item'>
          <Button variant='outline' className='filters-list__button'>
            Мест осталось
          </Button>
        </li>
      </ul>
    </div>
  )
}
