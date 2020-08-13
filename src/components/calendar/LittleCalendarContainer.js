import React, { useContext } from 'react'
import { calendarArrayy } from '../../utils'
import { Context } from '../../context/littleCalendarProvider'
import { Context as Context2 } from '../../context/littleCalendarProvider2'
import { LittleCal } from './LittleCalendar'
import { Context as BookingContext } from '../../context/bookingProvider'

const LittleCalendarContainer = () => {
  const { state } = useContext(Context)
  const { calendarArray } = state
  const { calendarArray2 } = useContext(Context2).state
  const stateBooking = useContext(BookingContext).state
  const { bookingArray } = stateBooking

  const calendar = calendarArray.map((n) => {
    return <LittleCal idd="1" month={calendarArrayy[n]} mN={n} />
  })
  const calendar2 = calendarArray2.map((n) => {
    return <LittleCal idd="2" month={calendarArrayy[n]} />
  })

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        width: '400px',
        border: '1px solid black',
        // position: 'absolute',
        backgroundColor: 'grey',
        // margin: '150px',
      }}
    >
      <div style={{ marginLeft: '20px' }}>{calendar}</div>
      <div
        style={{ opacity: 0.8, backgroundColor: 'red', width: '10px' }}
      ></div>
      <div>{calendar2}</div>
    </div>
  )
}

export default LittleCalendarContainer
