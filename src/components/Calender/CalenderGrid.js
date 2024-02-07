import React from 'react';
import CalenderDay from './CalenderDay';
import './CalenderStyle.css';

function CalendarGrid({ day, monthChanged, setEvent, axiosWithCache}) {
  const numDaysInMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate();
  const calendarGrid = [];

  let dayOfMonth = 1;
  for (let r = 0; r < 5; r++) {
    const row = [];
    for (let c = 0; c < 7; c++) {
      if (dayOfMonth <= numDaysInMonth) {
        const currentDate = new Date(day.getFullYear(), day.getMonth(), dayOfMonth);
        row.push(
          <td key={c}>
            <CalenderDay
              day={currentDate}
              monthChanged={monthChanged}
              setEventCallBack={setEvent}
              axiosWithCache={axiosWithCache}
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
