import React, { useContext } from 'react'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import { Context } from '../context/littleCalendarProvider'
import { daysOfTheWeek, initDays } from '../utils'

const shorDay = daysOfTheWeek.map((d) => d.slice(0, 2))
const styleMonth = {
  display: 'flex',
  justifyContent: 'space-between',
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
  const { state, nextMsg, prevMsg } = useContext(Context)
  const { current } = state

  const filterMonth = initDays.filter((m) => m.month == month.name)
  const column = (i) => {
    if (i === 0) return filterMonth[0].column
  }
  return (
    <div style={{ width: '150px' }}>
      <div style={{ display: 'grid' }}>
        <div style={styleMonth}>
          <FastRewindIcon
            style={{ fontSize: 20, opacity: 0.4 }}
            onClick={() => prevMsg(current - 1)}
          />
          <div style={{ fontSize: 9 }}>{month.name}</div>
          <FastForwardIcon
            style={{ fontSize: 20, opacity: 0.4 }}
            onClick={() => nextMsg(current + 1)}
          />
        </div>

        <div style={styleDaysContainer}>
          {shorDay.map((day) => (
            <div
              style={{
                justifySelf: 'center',
                alignSelf: 'center',
                fontSize: 9,
                ...styleDays,
              }}
            >
              {day}
            </div>
          ))}
        </div>

        <div style={styleDaysContainer}>
          {month.days.map((day, i) => {
            return (
              <div
                onClick={(e) => console.log(e.target)}
                style={{
                  alignSelf: 'center',
                  justifySelf: 'center',
                  gridColumn: column(i),
                  fontSize: 9,
                }}
              >
                {day}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const LittleCal = React.memo(LittleCalendar)
