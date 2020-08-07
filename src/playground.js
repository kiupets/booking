// const calendarComplete = calendarArrayy.map((m) => {
//   return (
//     <div>
//       <div style={styleMonth}>{m.name}</div>

//       <div style={styleDaysContainer}>
//         {m.days.map((day) => (
//           <div style={styleDays}>
//             {day}
//             <div>
//               {roomsData.map((ro) => (
//                 <div style={styleRooms}>{ro.number}</div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
const range = (d, h) => (d > h ? [] : [d, ...range(d + 1, h)])
const days = range(1, 30)

const daysWeek = [
  'l',
  'm',
  'm',
  'j',
  'v',
  's',
  'd',
  'l',
  'm',
  'm',
  'j',
  'v',
  's',
  'd',
  'l',
  'm',
  'm',
  'j',
  'v',
  's',
  'd',
  'l',
  'm',
  'm',
  'j',
  'v',
  's',
  'd',
  'l',
  'm',
  'm',
]
// const inc = (x) => x + 1
// const loop = (i) => {}
// const d = days.map((d, i) => {
//   console.log(daysWeek[i])

//   return { [d]: daysWeek[i] }
// })
// console.log(d)
// export const roomsData = [
//   { number: 1, booked: false },
//   { number: 2, booked: false },
//   { number: 3, booked: false },
//   { number: 4, booked: false },
//   { number: 5, booked: false },
//   { number: 6, booked: false },
//   { number: 7, booked: false },
//   { number: 8, booked: false },
//   { number: 9, booked: false },
//   { number: 10, booked: false },
//   { number: 11, booked: false },
//   { number: 12, booked: false },
//   { number: 13, booked: false },
//   { number: 14, booked: false },
//   { number: 15, booked: false },
// ]
// export const daysOfTheWeek = [
//   'Domingo',
//   'Lunes',
//   'Martes',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sabado',
// ]
// export const monthNames = [
//   'Enero',
//   'Febrero',
//   'Marzo',
//   'Abril',
//   'Mayo',
//   'Junio',
//   'Julio',
//   'Agosto',
//   'Setiembre',
//   'Octubre',
//   'Noviembre',
//   'Diciembre',
// ]
// const getDate = () => {
//   const date = new Date()
//   return {
//     day: date.getDay(),
//     month: date.getMonth() + 1,
//     year: date.getFullYear(),
//     time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
//   }
// }
// const date = getDate()
// export const { year, month, day, time } = date
// export const allMonths = monthNames.map((_, i) =>
//   [i].map((d) => new Date(year, i + 1, 0).getDate()),
// )
// export const allMonthArray = allMonths.map((days) =>
//   [...Array(days[0])].map((_, i) => i + 1),
// )

// const daysOfMonth = (year, month) => new Date(year, month, 0).getDate()
// export const days = [...Array(daysOfMonth(year, month))].map((_, y) => y + 1)
// // [ DATA ]: RESERVATION TWO DIMENSIONAL ARRAY DATA

// const monthReducerArray = (acc, month, i) => {
//   return [...acc, { name: month, days: allMonthArray[i] }]
// }
// export const calendarArrayy = monthNames.reduce(monthReducerArray, [])
