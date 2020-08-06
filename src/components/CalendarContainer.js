import React, { useEffect, useContext, useState, useCallback } from 'react'
import * as R from 'ramda'
import { calendarArrayy, roomsData } from '../utils'
import { Context } from '../context/calendarProvider'
import { CalendarContainerInd } from './calendarContainerIndividual'
import { autoGrid } from '../useFullCode'

const CalendarContainer = () => {
  const { state, nextMsg, prevMsg } = useContext(Context)
  const { calendarArray, current } = state
  console.log(calendarArray)

  const calendar = calendarArray.map((n) => {
    return <CalendarContainerInd month={calendarArrayy[n]} />
  })

  const scrolling = (e) => {
    const el = e.target
    if (el.scrollLeft === 0) {
      prevMsg(calendarArray[0] - 1)
      el.scrollTo(3000, 0)
    } else if (el.scrollWidth - el.scrollLeft === el.clientWidth) {
      nextMsg(calendarArray[0] + 1)
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
