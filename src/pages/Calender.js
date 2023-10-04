import CalenderGrid from "../components/CalenderGrid";
import CalenderGrid from "../components/Calender/CalenderGrid"
import React, { useState } from 'react';
import "../App.css";
import User from '../components/User';
import Event from '../components/Event';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import EventList from "../components/EventList";
import DisplayEvent from "../components/DisplayEvent";
import { Button } from "@mui/material";

import Event from '../Event/Event'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import EventList from "../Event/EventList"

export default function Calender()
{  
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentEvent, setCurrentEvent] = useState(null);

    let loc = "home";
    let loc1 = "JTH";
    let d = new Date();
    let d1 = new Date("2023-08-03");
    let d2 = new Date("2023-10-05");
    let t = "08.00"
    let t1 = "09.00";


    let person = new User("Jacob","2","Sweden","Test","Wonderful");
    const persons = ["John", "Alice","El Samuel","Gurr"];
    const attendendace = ["Simon","Simon2","Simon4"];
    let event = new Event(d,loc,t,persons);
    let event2 = new Event(d1,loc1,t1,attendendace);
    let event3 = new Event(d2,loc1,t1,persons);
    let event4 = new Event(d1, loc1, t1, ['Simon', 'Simon2', 'Simon4']);
    person.listEvents.push(event);
    person.listEvents.push(event2);
    person.listEvents.push(event3);

    const setCurrentEventFunction = (event) => {
        setCurrentEvent(event);
      };

    const nextMonth = () => {
        const nextMonthDate = new Date(currentMonth);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
        setCurrentMonth(nextMonthDate);
      };
    
      const prevMonth = () => {
        const prevMonthDate = new Date(currentMonth);
        prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
        setCurrentMonth(prevMonthDate);
      };
    
      const getCurrentMonthName = () => {
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[currentMonth.getMonth()];
      };

    console.log("This is length",person.listEvents);

    return (
        <div className="container">
            <div className="flex_eventView">
                <div className="flex_button">
                    <Button className="prevMonth" onClick={prevMonth}>
                        <ArrowCircleLeftIcon fontSize="large"/>
                    </Button>
                    <h1 className="currentMonth">{getCurrentMonthName()} {currentMonth.getFullYear()}</h1>
                    <Button className="nextMonth" onClick={nextMonth}>
                        <ArrowCircleRightIcon fontSize="large"/>
                    </Button>
                </div>
                <div className="flex_event">
                    <DisplayEvent Event={currentEvent} setEvent={setCurrentEventFunction}></DisplayEvent>
                    {/* Test buttons */}
                    <Button onClick={() => setCurrentEventFunction(event4)}>TestEvent</Button>
                    <Button onClick={() => setCurrentEventFunction(null)}>NULL</Button>
                </div>
           </div>
           <div className="flex_calender">
            <EventList person={person}/>
            <CalenderGrid day = {currentMonth} user = {person}></CalenderGrid>
            </div>
        </div>
    )

}