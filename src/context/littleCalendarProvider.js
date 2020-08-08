import * as R from 'ramda'
import createDataContext from './createDataContext'
import { month } from '../utils'

const MSGS = {
  PREV: 'PREV',
  NEXT: 'NEXT',
}

const prevMsg = (dispatch) => (n) =>
  dispatch({
    type: MSGS.PREV,
    n,
  })
const nextMsg = (dispatch) => (n) =>
  dispatch({
    type: MSGS.NEXT,
    n,
  })

const LittleCalendarProvider = (state, action) => {
  switch (action.type) {
    case MSGS.NEXT: {
      const { calendarArray, current } = state
      const { n } = action
      const updatedCalendarArray = R.map((x) => n, calendarArray)
      return { ...state, calendarArray: updatedCalendarArray, current: n }
    }

    case MSGS.PREV: {
      const { calendarArray, current } = state
      const { n } = action
      const updatedCalendarArray = R.map((x) => n, calendarArray)
      return { ...state, calendarArray: updatedCalendarArray, current: n }
    }
    default:
      return state
  }
}
export const { Context, Provider } = createDataContext(
  LittleCalendarProvider,
  { prevMsg, nextMsg },
  {
    calendarArray: [month - 1],
    current: month - 1,
  },
)
