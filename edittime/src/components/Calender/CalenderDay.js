import React, {useState, useEffect} from 'react';
import "./CalenderStyle.css";
import BookingWinow from '../SchedulingPopup';
import { Button } from '@mui/material';
import jwt_decode from 'jwt-decode'

export default function CalenderDay({ day, monthChanged, setEventCallBack, axiosWithCache}) {
  const formattedDate = day.toLocaleDateString();
  const isoDateTime = new Date(day.getTime() - (day.getTimezoneOffset() * 60000)).toISOString();
  /*THIS IS CURRENTLY WHAT ATTENDE NAME IT LOOKS FOR*/
  const token = localStorage.getItem('token')
  const decodedToken = jwt_decode(token,process.env.KEY)
  const NameID = decodedToken.email;
  const [bookingWindowOpen, setBookingWindowOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const gatewayIP = "20.76.217.223";

  const toggleBookingWindow = () => {
    setBookingWindowOpen(!bookingWindowOpen);
  };
  useEffect(() => {
    if (monthChanged) {
      setEvents([]);
    }

    const cacheKey = `http://${gatewayIP}/events/${NameID}/${isoDateTime}`;
    axiosWithCache 
      .get(cacheKey)
      .then((response) => {
        console.log('cache?', response.cached);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
    }
  , [NameID, isoDateTime, monthChanged, axiosWithCache]);
  

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