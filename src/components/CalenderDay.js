import React, {useState, useEffect} from 'react';
import "./CalenderStyle.css";
import BookingWinow from './SchedulingPopup';
import { Button } from '@mui/material';
import setCurrentEventFunction from '../pages/Calender';
import Event from './Event';
import axios from 'axios';

let event4 = new Event(new Date("2023-08-03"), "JTH", "09.00", ['Simon', 'Simon2', 'Simon4']);

export default function CalenderDay({ day, location, time, attendies }) {
  // Convert the date object to a string
  const formattedDate = day.toLocaleDateString();
  const [bookingWindowOpen, setBookingWindowOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleBookingWindow = () => {
    setBookingWindowOpen(!bookingWindowOpen);
  };

  useEffect(() => {
    // Fetch events from the database based on the formattedDate
    axios.get(`http://localhost:3000/api/events?date=${formattedDate}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, [formattedDate]);


  //console.log(BookingWindowOpen);
  console.log("This is date",formattedDate)
  return (
    <div className="calender_day">
      <header className="date" onClick={toggleBookingWindow}>
        {formattedDate}
      </header>
      {events.map((event) => (
        <Button key={event.id} onClick={() => setCurrentEventFunction(event)}>
          {event.location}
        </Button>
      ))}
      <div>
        {bookingWindowOpen && <BookingWinow formattedDate={formattedDate} />}
      </div>
    </div>
  );
}
