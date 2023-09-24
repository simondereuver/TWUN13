import React from 'react';
import "../App.css";
import CalenderDay from './CalenderDay';

function CalendarGrid({day,events}) {
  var numDays = new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate(); // Get the number of days in the current month
  var fillValue = 1;
  const rows = [];

  for (let r = 0; r < 7; r++) {
    const cols = [];
    for (let c = 0; c < 5; c++) 
    {
      if (fillValue <= numDays) 
      {
        cols.push(<td key={c}><CalenderDay day="hello" location="home2" time="9.00" attendies={["Jacob"]} /> {fillValue}</td>);
        fillValue++;
      }
    }
    rows.push(<tr key={r}>{cols}</tr>);
  } 

  return (
    <div className="calendarContainer">
      <table className="calendar">
        {rows}
      </table>
    </div>
  );
}

export default CalendarGrid;
