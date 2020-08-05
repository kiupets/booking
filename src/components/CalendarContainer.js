import React, { useEffect, useContext, useState, useCallback } from 'react'
import * as R from 'ramda'
import { calendarArrayy, roomsData } from '../utils'
import { Context } from '../context/calendarProvider'
import CalendarContainerIndividual from './calendarContainerIndividual'

const CalendarContainer = () => {
  const { state, nextMsg, prevMsg } = useContext(Context)
  const { calendarArray, current } = state

  const calendar = calendarArray.map((n) => {
    return <CalendarContainerIndividual month={calendarArrayy[n]} />
  })
  const scrolling = (e) => {
    const el = e.target
    return el.scrollLeft === 0
      ? console.log('hola')
      : el.scrollWidth - el.scrollLeft === el.clientWidth
      ? console.log('chau')
      : null
  }

  return (
    <div
      onScroll={scrolling}
      style={{ overflowX: 'scroll', overflowY: 'hidden' }}
    >
      {calendar}
    </div>
  )
}

export default CalendarContainer
