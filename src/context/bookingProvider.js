import * as R from 'ramda'
import createDataContext from './createDataContext'

const MSGS = {
  DESDE: 'DESDE',
  HASTA: 'HASTA',
  SHOW: 'SHOW',
  CLOSE: 'CLOSE',
}
const showMsg = (dispatch) => (toogle, month, day, ro) => {
  dispatch({
    type: MSGS.SHOW,
    toogle,
    month,
    day,
    ro,
  })
}
const closeMsg = (dispatch) => (close) => {
  dispatch({
    type: MSGS.CLOSE,
    close,
  })
}
const desdeMsg = (dispatch) => (d, m) =>
  dispatch({
    type: MSGS.DESDE,
    d,
    m,
  })
const hastaMsg = (dispatch) => (h, m) =>
  dispatch({
    type: MSGS.HASTA,
    h,
    m,
  })

const bookingProvider = (state, action) => {
  switch (action.type) {
    case MSGS.DESDE: {
      const { d, m } = action
      const { bookingArray } = state

      const updatedDesde = R.append([d, m], bookingArray)
      return { ...state, bookingArray: updatedDesde }
    }

    case MSGS.HASTA: {
      const { h, m } = action

      const { bookingArray } = state
      const updatedHasta = R.append([h, m], bookingArray)
      return { ...state, bookingArray: updatedHasta }
    }
    case MSGS.SHOW: {
      const { toogle, ro, day, month } = action
      const { bookingArray } = state
      console.log(toogle, ro, day, month)
      const updatedBookingArray = R.append([ro, day, month], bookingArray)
      return { ...state, bookingArray: updatedBookingArray, show: toogle }
    }

    default:
      return state
  }
}

export const { Context, Provider } = createDataContext(
  bookingProvider,
  { desdeMsg, hastaMsg, showMsg, closeMsg },
  {
    bookingArray: [],
    show: false,
  },
)
