import React from 'react'
import { calendarArrayy, roomsData } from '../utils'
const styleMonth = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}
const styleDays = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  backgroundColor: 'grey',
}
const styleRooms = {
  width: 100,
  backgroundColor: 'red',
  border: '1px solid black',
}
const styleDaysContainer = { display: 'grid', gridAutoFlow: 'column' }

const CalendarContainerIndividual = ({ month }) => {
  return (
    <div style={{ display: 'grid' }}>
      <div style={styleMonth}>
        <div>{month.name}</div>
        <div>{month.name}</div>
        {/* <div ref={reference}>{month.name}</div> */}
      </div>

      <div style={styleDaysContainer}>
        {month.days.map((day) => (
          <div style={styleDays}>
            {day}
            <div>
              {roomsData.map((ro) => (
                <div style={styleRooms}>{ro.number}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const CalendarContainerInd = React.memo(CalendarContainerIndividual)
