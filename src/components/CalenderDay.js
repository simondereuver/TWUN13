import "../App.css";
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function CalenderDay({day,location,time,attendies}){
    
    return(
        <div className="calender_day">
            <header className="date">
                {day}
            </header>
            <h1 className="place">
                <RoomIcon/>
                {location}
            </h1>
            <h2 className="time">
                <AccessTimeIcon/>
                {time}
            </h2>
            <ul className={`list_events ${attendies.length > 3 ? 'scrollable' : ''}`}>
                {attendies.map((person,index) => (
                    <li key = {index}>{person}</li>
                ))}
</ul>

        </div>
    )
}
