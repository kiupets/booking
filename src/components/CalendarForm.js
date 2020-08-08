import React, { useContext } from 'react'
import { calendarArrayy } from '../utils'
import { Context } from '../context/littleCalendarProvider'
import { LittleCal } from './LittleCalendar'

const CalendarForm = () => {
  const { state } = useContext(Context)
  const { calendarArray } = state

  const calendar = calendarArray.map((n) => {
    return <LittleCal month={calendarArrayy[n]} />
  })

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        width: '200px',
      }}
    >
      {calendar}
    </div>
  )
}

export default CalendarForm
