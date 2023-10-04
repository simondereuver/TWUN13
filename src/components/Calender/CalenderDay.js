import React, {useState, useEffect} from 'react';
import "./CalenderStyle.css";
<<<<<<< HEAD:src/components/CalenderDay.js
import BookingWinow from './SchedulingPopup';
import { Button } from '@mui/material';
import setCurrentEventFunction from '../pages/Calender';
import axios from 'axios';

export default function CalenderDay({ day, location, time, attendies }) {
  const formattedDate = day.toLocaleDateString();
  const [bookingWindowOpen, setBookingWindowOpen] = useState(false);
  const [events, setEvents] = useState([]);
=======
import BookingWinow from '../SchedulingPopup';
import {useState} from 'react';
export default function CalenderDay({ day, location, time, attendies }) {
  // Convert the date object to a string
  const formattedDate = day.toLocaleDateString();
>>>>>>> main:src/components/Calender/CalenderDay.js

  const toggleBookingWindow = () => {
    setBookingWindowOpen(!bookingWindowOpen);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/api/events?date=${formattedDate}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, [formattedDate]);


  console.log(formattedDate);
  console.log("This is date",formattedDate)
  return (
    <div className="calender_day">
      <header className="date" onClick={toggleBookingWindow}>
        {formattedDate}
      </header>
      {events.map((event) => (
        <Button key={event.id} onClick={() => setCurrentEventFunction(event)}>
          {event.location} {event.time}
        </Button>
      ))}
      <div>
        {bookingWindowOpen && <BookingWinow formattedDate={formattedDate} />}
      </div>
    </div>
  );
}
