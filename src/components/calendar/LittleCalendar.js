import React, { useContext } from 'react'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import { Context } from '../../context/littleCalendarProvider'
import { Context as Context2 } from '../../context/littleCalendarProvider2'
import { Context as BookingContext } from '../../context/bookingProvider'

import { daysOfTheWeek, initDays } from '../../utils'

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

const LittleCalendar = ({ month, idd }) => {
  const { state, nextMsg, prevMsg } = useContext(Context)
  const { current } = state
  const { nextMsg2, prevMsg2 } = useContext(Context2)
  const { current2, calendarArray2 } = useContext(Context2).state
  const bookingState = useContext(BookingContext).state
  const { desdeMsg, hastaMsg } = useContext(BookingContext)
  console.log(bookingState)

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
            onClick={() => {
              if (idd === '1') {
                prevMsg(current - 1)
              } else if (idd === '2') {
                prevMsg2(current2 - 1)
              }
            }}
          />
          <div style={{ fontSize: 9 }}>{month.name}</div>
          <FastForwardIcon
            style={{ fontSize: 20, opacity: 0.4 }}
            onClick={() => {
              if (idd === '1') {
                nextMsg(current + 1)
              } else if (idd === '2') {
                nextMsg2(current2 + 1)
              }
            }}
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
                // DESDE >>>>>> HASTA
                onClick={(e) => {
                  if (idd === '1') {
                    // console.log(e.target.innerHTML, month.name)
                    desdeMsg(e.target.innerHTML, month.name)
                  } else if (idd === '2') {
                    // console.log(e.target.innerHTML, month.name)
                    hastaMsg(e.target.innerHTML, month.name)
                  }
                }}
                style={{
                  cursor: 'pointer',
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
