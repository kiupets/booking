export const roomsData = [
  { number: 1, booked: false },
  { number: 2, booked: false },
  { number: 3, booked: false },
  { number: 4, booked: false },
  { number: 5, booked: false },
  { number: 6, booked: false },
  { number: 7, booked: false },
  { number: 8, booked: false },
  { number: 9, booked: false },
  { number: 10, booked: false },
  { number: 11, booked: false },
  { number: 12, booked: false },
  { number: 13, booked: false },
  { number: 14, booked: false },
  { number: 15, booked: false },
]
export const daysOfTheWeek = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
]
export const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]
const getDate = () => {
  const date = new Date()
  return {
    day: date.getDay(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
  }
}
const date = getDate()
export const { year, month, day, time } = date
export const allMonths = monthNames.map((_, i) =>
  [i].map((d) => new Date(year, i + 1, 0).getDate()),
)
export const allMonthArray = allMonths.map((days) =>
  [...Array(days[0])].map((_, i) => i + 1),
)

const daysOfMonth = (year, month) => new Date(year, month, 0).getDate()
export const days = [...Array(daysOfMonth(year, month))].map((_, y) => y + 1)
// [ DATA ]: RESERVATION TWO DIMENSIONAL ARRAY DATA

const monthReducerArray = (acc, month, i) => {
  return [
    ...acc,
    {
      name: month,
      days: allMonthArray[i],
    },
  ]
}
export const calendarArrayy = monthNames.reduce(monthReducerArray, [])

const dayColumn = allMonthArray.map((m, mm) => {
  return m.map((d) => {
    return { day: new Date(2020, mm, d).getDay() }
  })
})
export const initDays = dayColumn.map((x, i) => {
  return { month: monthNames[i], column: x[0].day + 1 }
})
