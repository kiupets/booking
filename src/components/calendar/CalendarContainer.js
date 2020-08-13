import React, { useContext } from 'react'
import { calendarArrayy } from '../../utils'
import { Context } from '../../context/calendarProvider'
import { Context as BookingContext } from '../../context/bookingProvider'
import { CalendarContainerInd } from './calendarContainerIndividual'

const CalendarContainer = () => {
  const { state, nextMsg, prevMsg } = useContext(Context)
  const { calendarArray } = state
  const bookingState = useContext(BookingContext).state
  const { bookingArray } = bookingState
  // console.log(bookingArray)

  const calendar = calendarArray.map((n) => {
    return <CalendarContainerInd month={calendarArrayy[n]} mn={n} />
  })

  const scrolling = (e) => {
    const el = e.target
    if (el.scrollLeft === 0) {
      prevMsg(calendarArray[0] - 1)
      el.scrollTo(3000, 0)
    } else if (el.scrollWidth - el.scrollLeft === el.clientWidth) {
      nextMsg(calendarArray[0] + 2)
      el.scrollTo(3000, 0)
    }
  }

  return (
    <div
      onScroll={scrolling}
      style={{
        overflowX: 'scroll',
        overflowY: 'hidden',
        display: 'grid',
        gridAutoFlow: 'column',
      }}
    >
      {calendar}
    </div>
  )
}

export default CalendarContainer
