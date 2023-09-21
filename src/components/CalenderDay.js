import "../App.css";
import React from 'react';

export default function CalenderDay({day}){
    return(
        <div className="calender_day">
            <header className="date">
                {day}
            </header>
            <ul className="list_events">
            </ul>
        </div>
    )
}
