import React, {useState, useEffect} from 'react';
import "./CalenderStyle.css";
import BookingWinow from '../SchedulingPopup';
import { Button } from '@mui/material';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

export default function CalenderDay({ day, monthChanged, setEventCallBack}) {
  const formattedDate = day.toLocaleDateString();
  const isoDateTime = new Date(day.getTime() - (day.getTimezoneOffset() * 60000)).toISOString();
  /*THIS IS CURRENTLY WHAT ATTENDE NAME IT LOOKS FOR*/
  const token = localStorage.getItem('token')
  const decodedToken = jwt_decode(token,process.env.KEY)
  const NameID = decodedToken.email;
  const [bookingWindowOpen, setBookingWindowOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleBookingWindow = () => {
    setBookingWindowOpen(!bookingWindowOpen);
  };

  useEffect(() => {
    if (monthChanged) {
      setEvents([]);
    }
    axios
      .get(`http://localhost:3001/api/events/${NameID}/${isoDateTime}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, [NameID, isoDateTime, monthChanged]);

  console.log(isoDateTime);
  console.log(events);
  return (
    <div className="calender_day">
      <header className="date" onClick={toggleBookingWindow}>
        {formattedDate}
      </header>
      {events &&
        events
          .sort((a, b) => a.time.localeCompare(b.time))
          .map((event) => (
            <Button className='event' style={{ color: 'black' }}  onClick={() => setEventCallBack(event)}>
              {event.location}  |  {event.time}
            </Button>
          ))}
      <div>
        {bookingWindowOpen && <BookingWinow formattedDate={formattedDate} />}
      </div>
    </div>
  );
}