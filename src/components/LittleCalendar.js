import React, { useContext } from 'react'
import { Context } from '../context/calendarProvider'
import { daysOfTheWeek, initDays } from '../utils'

const styleMonth = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const styleDays = {
  display: 'grid',
  gridAutoFlow: 'column',
  alignItems: 'center',
}

const styleDaysContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7,1fr)',
}

const LittleCalendar = ({ month }) => {
  const { state } = useContext(Context)
  const { calendarArray } = state
  const filterMonth = initDays.filter((m) => m.month == month.name)

  const column = (i) => {
    if (i === 0) return filterMonth[0].column
  }
  return (
    <div style={{ display: 'grid' }}>
      <div style={styleMonth}>
        <div style={{ fontSize: 9 }}>{month.name}</div>
      </div>

      <div style={styleDaysContainer}>
        {daysOfTheWeek.map((day) => (
          <div style={{ fontSize: 9, ...styleDays }}>{day}</div>
        ))}
      </div>

      <div style={styleDaysContainer}>
        {month.days.map((day, i) => {
          return (
            <div
              onClick={(e) => console.log(e.target)}
              style={{ gridColumn: column(i), fontSize: 9 }}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const LittleCal = React.memo(LittleCalendar)
