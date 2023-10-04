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
  const [BookingWindowOpen, SetBookingWindowOpen] = useState(false);
  const [eventsExist, setEventsExist] = useState(false);
  const toggleBookingWindow = () => {
    SetBookingWindowOpen(!BookingWindowOpen)
  };

  useEffect(() => {
    // Fetch events and set the eventsExist state based on the result
    axios.get('http://localhost:3000/api/events')
      .then((response) => {
        const filteredEvents = response.data.filter((event) => event.startDate >= formattedDate);
        setEventsExist(filteredEvents.length > 0); // Check if events exist
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);


  console.log(BookingWindowOpen);
  console.log("This is date",formattedDate)
  return (
    <div className="calender_day">
      <header className="date" onClick={toggleBookingWindow}>
        {formattedDate}
      </header>
      {eventsExist && (
        <Button onClick={() => setCurrentEventFunction(event4)}>{event4.location}</Button>
      )}
      <div>
          {/* Render LoginWindow when loginWindowOpen is true */}
          {BookingWindowOpen && <BookingWinow formattedDate={formattedDate}/>} 
        </div>
    </div>
  );
}
