import React, { useRef, useCallback } from 'react'
import CalendarContainer from './components/CalendarContainer'
import { Provider as CalendarProvider } from './context/calendarProvider'

const App = () => {
  return (
    <CalendarProvider>
      <CalendarContainer />
      {/* <NavBarWrapper /> */}
    </CalendarProvider>
  )
}

export default App
