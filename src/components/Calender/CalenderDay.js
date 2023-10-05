import React, {useState, useEffect} from 'react';
import "./CalenderStyle.css";
import BookingWinow from '../SchedulingPopup';
import { Button } from '@mui/material';
import setCurrentEventFunction from '../../pages/Calender';
import axios from 'axios';

export default function CalenderDay({ day, location, time, attendies }) {
  const formattedDate = day.toLocaleDateString();
  const NameID = "gustav";
  const [bookingWindowOpen, setBookingWindowOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleBookingWindow = () => {
    setBookingWindowOpen(!bookingWindowOpen);
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/api/events/${NameID}/${formattedDate}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, [formattedDate]);

  console.log(events);
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
