import * as R from 'ramda'
import createDataContext from './createDataContext'
import { month } from '../utils'
console.log(month)

const MSGS = {
  PREV: 'PREV',
  NEXT: 'NEXT',
  SETCALENDAR: 'SETCALENDAR',
  COUTERNEXT: 'COUNTERNEXT',
}
const counterNextMsg = (dispatch) => (n) => {
  dispatch({
    type: MSGS.COUTERNEXT,
    n,
  })
}
const setCalendarMsg = (dispatch) => (newArray) => {
  dispatch({
    type: MSGS.SETCALENDAR,
    newArray,
  })
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

const roomsProvider = (state, action) => {
  switch (action.type) {
    case MSGS.COUTERNEXT: {
      const { next } = state
      const { n } = action

      return { ...state, next: next + n }
    }
    case MSGS.NEXT: {
      const { calendarArray, current } = state
      const { n } = action
      const updatedCalendarArray = R.append(n, calendarArray)
      return {
        ...state,
        calendarArray: updatedCalendarArray,
        current: current + 1,
      }
    }

    case MSGS.PREV: {
      const { calendarArray, current } = state
      console.log(current)
      const { n } = action

      const updatedCalendarArray = R.prepend(n, calendarArray)
      if (updatedCalendarArray.length > 2) {
        const takeArray = R.take(2, updatedCalendarArray)
        return {
          ...state,
          calendarArray: takeArray,
          current: current - 1,
        }
      } else {
        return {
          ...state,
          calendarArray: updatedCalendarArray,
          current: current - 1,
        }
      }
    }
    case MSGS.SETCALENDAR: {
      const { calendarArray } = state
      const { newArray } = action
      const updatedCalendarArray = R.append(newArray, calendarArray)
      return { ...state, calendarArray: updatedCalendarArray }
    }
    default:
      return state
  }
}

export const { Context, Provider } = createDataContext(
  roomsProvider,
  { prevMsg, nextMsg, setCalendarMsg, counterNextMsg },
  {
    calendarArray: [month - 1],
    next: 0,
    prev: 0,
    current: month - 1,
    isVisible: false,
  },
)
