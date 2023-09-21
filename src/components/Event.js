import "../App.css";
import React from 'react';

export default function Event({day,time,place,attendies}){
    
    ev_date = new Date(day);
    ev_time = new Date.time(time);
    ev_place =  new String(place);
    ev_attendies = new List(attendies);
    ev_attendies = ["HELLO","Hej"];

    return(
        <div className="Banner">
            <ul className="event_details">
                <li>{ev_date}</li>
                <li>{ev_time}</li>
                <li>{ev_place}</li>
                    <ul className="attendies_list">
                        {ev_attendies.map((name,index) => (
                                //iF length of list is greater than 4 drop down menu? 
                            <li key={index}>{name}</li>
                            ))
                        }
                    </ul>
            </ul>
        </div>
    )
}
