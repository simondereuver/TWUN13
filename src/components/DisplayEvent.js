import React from 'react';
import "../App.css";

function DisplayEvent({ Event }) {
    if (!Event) {
        return <div className='event'>No event selected</div>;
      }
    console.log('Event:', Event);

    return (
        <div className="event">
            <h2>Event Details</h2>
            <p>Date: {Event.date.toString().split('T')[0]}</p>
            <p>Location: {Event.location}</p>
            <p>Time: {Event.time}</p>
            <p>Attendees: {Event.attendies && Event.attendies.join(', ')}</p>
        </div>
    );
}

export default DisplayEvent;