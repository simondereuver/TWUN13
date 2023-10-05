import React, {useState, useEffect} from 'react';
import "./CalenderStyle.css";
import BookingWinow from '../SchedulingPopup';
import { Button } from '@mui/material';
import setCurrentEventFunction from '../../pages/Calender';
import axios from 'axios';

export default function CalenderDay({ day }) {
  const formattedDate = day.toLocaleDateString();
  const date = day.toISOString();
  const NameID = "Gustav";
  const [bookingWindowOpen, setBookingWindowOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleBookingWindow = () => {
    setBookingWindowOpen(!bookingWindowOpen);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events/${NameID}/${date}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, [date]);

  console.log(date);
  console.log(events);
  return (
    <div className="calender_day">
      <header className="date" onClick={toggleBookingWindow}>
        {formattedDate}
      </header>
      {events.map((events) => (
        <Button key={events.id} onClick={() => setCurrentEventFunction(events)}>
          {events.location} {events.times}
        </Button>
      ))}
      <div>
        {bookingWindowOpen && <BookingWinow formattedDate={formattedDate} />}
      </div>
    </div>
  );
}