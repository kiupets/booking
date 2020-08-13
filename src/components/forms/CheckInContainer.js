import React from 'react'
import CheckIn from './CheckIn'
import LittleCalendarContainer from '../calendar/LittleCalendarContainer'

const CheckInContainer = () => {
  return (
    <div
      style={{
        margin: '149px',
        display: 'grid',
        gridAutoFlow: 'row',
        position: 'absolute',
      }}
    >
      <LittleCalendarContainer />
      <CheckIn />
    </div>
  )
}

export default CheckInContainer
