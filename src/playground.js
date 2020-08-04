const calendarComplete = calendarArrayy.map((m) => {
  return (
    <div>
      <div style={styleMonth}>{m.name}</div>

      <div style={styleDaysContainer}>
        {m.days.map((day) => (
          <div style={styleDays}>
            {day}
            <div>
              {roomsData.map((ro) => (
                <div style={styleRooms}>{ro.number}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
