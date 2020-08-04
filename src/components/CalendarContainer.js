import React, { useEffect, useContext, useState, useCallback } from 'react'
import * as R from 'ramda'
import { calendarArrayy, roomsData } from '../utils'
import { Context } from '../context/calendarProvider'
import CalendarContainerIndividual from './calendarContainerIndividual'

const CalendarContainer = () => {
  const { state, nextMsg, prevMsg } = useContext(Context)
  const { calendarArray, current } = state
  const [n, setN] = useState(0)

  const calendar = calendarArray.map((n) => {
    return <CalendarContainerIndividual month={calendarArrayy[n]} />
  })
  useEffect(() => {
    const scrollingDay = (e) => {
      setN(window.scrollX)
    }
    window.addEventListener('scroll', scrollingDay)
    if (n === 0) {
      prevMsg(current)
      window.scrollTo(3000, 0)
    } else if (n > 5200) {
      nextMsg(current)
    }
  }, [n])

  return (
    <div style={{ display: 'grid', gridAutoFlow: 'column' }}>{calendar}</div>
  )
}

export default CalendarContainer
