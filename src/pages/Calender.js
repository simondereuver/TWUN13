import CalenderGrid from "../components/Calender/CalenderGrid"
import React, { useState } from 'react';
import "../App.css";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DisplayEvent from "../components/DisplayEvent";
import { Button } from "@mui/material";

export default function Calender()
{  
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentEvent, setCurrentEvent] = useState(null);
    const [monthChanged, setMonthChanged] = useState(false);

    const setCurrentEventFunction = (event) => {
      setCurrentEvent(event);
    };

    const nextMonth = () => {
      const nextMonthDate = new Date(currentMonth);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      setCurrentMonth(nextMonthDate);
      setMonthChanged(true);
    };
    
    const prevMonth = () => {
      const prevMonthDate = new Date(currentMonth);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      setCurrentMonth(prevMonthDate);
      setMonthChanged(true);
    };
  
    const getCurrentMonthName = () => {
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return monthNames[currentMonth.getMonth()];
    };

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
              </div>
          </div>
          <div className="flex_calender">
            <CalenderGrid 
              day={currentMonth} 
              monthChanged={monthChanged} 
              setEvent={setCurrentEventFunction}>
            </CalenderGrid>
          </div>
      </div>
    )
}