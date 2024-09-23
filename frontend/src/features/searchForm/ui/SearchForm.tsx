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
      <div className='search__form-field input-from'>
        <input
          className='field__input-from'
          type='text'
          placeholder='Откуда'
          id='from'
        />
        <span></span>
      </div>
      <div className='search__form-field input-to'>
        <input
          className='field__input-to'
          type='text'
          placeholder='Куда'
          id='to'
        />
        <span></span>
      </div>
      <div className='date__picker-field'>
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
      <Button className='search__form-button' type='submit'>
        Найти
      </Button>
    </form>
  )
}
