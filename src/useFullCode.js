const observer = useRef()
const observerFirst = useRef()
const lastDay = useCallback(
  (node) => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(nextS)
        nextMsg(calendarComponent[nextS])
      }
    })
    if (node) observer.current.observe(node)
  },
  [nextS],
)
const calendarComponent = calendar.map((m) =>
  m.map((mm) => {
    if (mm === 29) {
      return (
        <div ref={lastDay} style={styles}>
          {mm}
        </div>
      )
    } else if (mm === 1) {
      return (
        <div ref={firstDay} style={styles}>
          {mm}
        </div>
      )
    } else {
      return <div style={styles}>{mm}</div>
    }
  }),
)
export const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
})
