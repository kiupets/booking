import React, { useContext } from 'react'
import { roomsData } from '../../utils'
import { Context as LittleContext } from '../../context/littleCalendarProvider'
import { Context as BookingContext } from '../../context/bookingProvider'
import LittleCalendarContainer from './LittleCalendarContainer'
import CheckInContainer from '../forms/CheckInContainer'

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

const CalendarContainerIndividual = ({ month, mn }) => {
  const { fromBooking } = useContext(LittleContext)

  const { state, desdeMsg, hastaMsg, showMsg } = useContext(BookingContext)
  const { show } = state
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
                <div
                  onDoubleClick={() => {
                    showMsg(!show, ro.number, day, month.name)
                    fromBooking(mn)
                  }}
                  style={styleRooms}
                >
                  {ro.number}
                </div>
              ))}
            </div>
            {/* //ACA VA LAS PIEZAS FIJAS // position absolute */}
          </div>
        ))}
      </div>
      {show ? <CheckInContainer /> : null}
    </div>
  )
}

export const CalendarContainerInd = React.memo(CalendarContainerIndividual)
