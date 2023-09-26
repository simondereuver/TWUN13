import CalenderDay from "../components/CalenderDay";
import CalenderGrid from "../components/CalenderGrid";
import React, { useState } from 'react';
import User from '../components/User';
import Event from '../components/Event';
import SidePanel from '../components/Sidepanel';
import {SidepanelDataCalender} from '../components/SidepanelData';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import EventList from "../components/EventList";

export default function Calender()
{  
    const [date, setDate] = useState(new Date());

    let loc = "home";
    var d = new Date();
    let t = "08.00"
    const persons = ["John", "Alice","BitchBoy","Fucktard"];
    var event = new Event(d,loc,t,persons);
    var person = new User("Jacob","2","Swedjen","Test","Retarded");
    person.listEvents.push(event);
    console.log("This is length before",person);

    const prevMonth = () => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth()-1);
        setDate(newDate);
    }

    const nextMonth = () =>
    {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth()+1);
        setDate(newDate);
    }

    console.log("This is length",person.listEvents);

    return (
        <div>
            <EventList person={person}/>
           <button className="nextMonth" onClick={nextMonth}>
            <ArrowCircleRightIcon fontSize="large"/>
           </button>
           <button className="prevMonth" onClick={prevMonth}>
            <ArrowCircleLeftIcon fontSize="large"/>
           </button>
            <CalenderGrid day = {date} user = {person}></CalenderGrid>
        </div>
    )

}