import React from 'react';
import CalenderDay from './CalenderDay';
import './CalenderStyle.css';

function CalendarGrid({ day, user }) {
  const numDaysInMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate();
  const calendarGrid = [];

  let dayOfMonth = 1;
  for (let r = 0; r < 7; r++) {
    const row = [];
    for (let c = 0; c < 5; c++) {
      if (dayOfMonth <= numDaysInMonth) {
        const currentDate = new Date(day.getFullYear(), day.getMonth(), dayOfMonth);
        const eventsForCurrentDay = user.listEvents.filter((event) => {
          return (
            event.date.getDate() === currentDate.getDate() &&
            event.date.getMonth() === currentDate.getMonth() &&
            event.date.getFullYear() === currentDate.getFullYear()
          );
        });

        row.push(
          <td key={c}>
            <CalenderDay
              day={currentDate}
              location={eventsForCurrentDay[0]?.location || ""}
              time={eventsForCurrentDay[0]?.time || ""}
              attendies={eventsForCurrentDay[0]?.attendies || []}
            />
          </td>
        );
        dayOfMonth++;
      } else {
        row.push(<td key={c}></td>); // Empty cell for days beyond the current month
      }
    }
    calendarGrid.push(<tr key={r}>{row}</tr>);
  }

  return (
    <div className="calendarContainer">
      <table className="calendar">
        <tbody className='calender'>
          {calendarGrid}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarGrid;
