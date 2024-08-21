import React from 'react'
import DatePicker from 'react-datepicker'
import { Button } from '@/shared/ui'
import { ru } from 'date-fns/locale/ru'
import 'react-datepicker/dist/react-datepicker.css'
import './SearchForm.scss'

export const SearchForm = () => {
  const params = {
    from: 'Москва',
    to: 'Санкт-Петербург',
    date: null,
  }

  const [searchDate, setSearchDate] = React.useState<Date | null>(params.date)

  const handleDateChange = (date: Date | null) => {
    date && setSearchDate(date)
  }
  return (
    <form className='search__form'>
      <input type='text' placeholder='Откуда' id='from' />
      <input type='text' placeholder='Куда' id='to' />
      <div>
        <DatePicker
          locale={ru}
          id='date'
          startDate={new Date()}
          selected={searchDate}
          onChange={handleDateChange}
          placeholderText='Когда'
          minDate={new Date()}
          dateFormat='dd.MM.yyyy'
          className='date-picker'
        />
      </div>
      <Button type='submit'>Найти</Button>
    </form>
  )
}
