import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./CalenderStyle.css";
import BookingWinow from './SchedulingPopup';
import {useState} from 'react';
export default function CalenderDay({ day, location, time, attendies }) {
  // Convert the date object to a string
  const formattedDate = day.toLocaleDateString();

  const [BookingWindowOpen, SetBookingWindowOpen] = useState(false);
  const toggleBookingWindow = () => {
    SetBookingWindowOpen(!BookingWindowOpen)
  };
  console.log(BookingWindowOpen);
  console.log("This is date",formattedDate)
  return (
    <div className="calender_day">
      <header className="date" onClick={toggleBookingWindow}>
        {formattedDate}
      </header>
      <h1 className="place">
        <RoomIcon />
        {location}
      </h1>
      <h2 className="time">
        <AccessTimeIcon />
        {time}
      </h2>
      <ul className={`list_events ${attendies.length > 3 ? 'scrollable' : ''}`}>
        {attendies.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
      <div>
          {/* Render LoginWindow when loginWindowOpen is true */}
          {BookingWindowOpen && <BookingWinow ClickedDate={day}/>} 
        </div>
    </div>
  );
}
