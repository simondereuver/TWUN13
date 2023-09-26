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
    let loc1 = "JTH";
    let d = new Date();
    let d1 = new Date("2023-08-03");
    let d2 = new Date("2023-10-05");
    let t = "08.00"
    let t1 = "09.00";


    let person = new User("Jacob","2","Swedjen","Test","Wonderful");
    const persons = ["John", "Alice","El Samuel","Gurr"];
    const attendendace = ["Simon","Simon2","Simon4"];
    let event = new Event(d,loc,t,persons);
    let event2 = new Event(d1,loc1,t1,attendendace);
    let event3 = new Event(d2,loc1,t1,persons);
    person.listEvents.push(event);
    person.listEvents.push(event2);
    person.listEvents.push(event3);

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