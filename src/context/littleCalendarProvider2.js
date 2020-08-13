import * as R from 'ramda'
import createDataContext from './createDataContext'
import { month } from '../utils'

const MSGS = {
  PREV: 'PREV',
  NEXT: 'NEXT',
}

const prevMsg2 = (dispatch) => (n) =>
  dispatch({
    type: MSGS.PREV,
    n,
  })
const nextMsg2 = (dispatch) => (n) =>
  dispatch({
    type: MSGS.NEXT,
    n,
  })

const LittleCalendarProvider2 = (state, action) => {
  switch (action.type) {
    case MSGS.NEXT: {
      const { calendarArray2, current2 } = state
      const { n } = action
      const updatedCalendarArray = R.map((x) => n, calendarArray2)
      return { ...state, calendarArray2: updatedCalendarArray, current2: n }
    }

    case MSGS.PREV: {
      const { calendarArray2, current2 } = state
      const { n } = action
      const updatedCalendarArray = R.map((x) => n, calendarArray2)
      return { ...state, calendarArray2: updatedCalendarArray, current2: n }
    }
    default:
      return state
  }
}
export const { Context, Provider } = createDataContext(
  LittleCalendarProvider2,
  { prevMsg2, nextMsg2 },
  {
    calendarArray2: [month - 1],
    current2: month - 1,
  },
)
