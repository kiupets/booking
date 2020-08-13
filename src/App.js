import React, { useRef, useCallback } from 'react'
import CalendarContainer from './components/calendar/CalendarContainer'
import { Provider as CalendarProvider } from './context/calendarProvider'
import { Provider as LittleProvider } from './context/littleCalendarProvider'
import { Provider as LittleProvider2 } from './context/littleCalendarProvider2'
import { Provider as BookingProvider } from './context/bookingProvider'

const App = () => {
  return (
    <BookingProvider>
      <LittleProvider2>
        <LittleProvider>
          <CalendarProvider>
            <CalendarContainer />
            {/* <NavBarWrapper /> */}
          </CalendarProvider>
        </LittleProvider>
      </LittleProvider2>
    </BookingProvider>
  )
}

export default App
