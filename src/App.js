import React, { useRef, useCallback } from 'react'
import CalendarContainer from './components/CalendarContainer'
import { Provider as CalendarProvider } from './context/calendarProvider'
import { Provider as LittleProvider } from './context/littleCalendarProvider'

const App = () => {
  return (
    <LittleProvider>
      <CalendarProvider>
        <CalendarContainer />
        {/* <NavBarWrapper /> */}
      </CalendarProvider>
    </LittleProvider>
  )
}

export default App
