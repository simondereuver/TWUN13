import React from 'react'
import "../App.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { NavLink } from 'react-router-dom';

function Navigation_Bar()
{
    return (

<div class="banner">
  <div class="left-buttons">
    <NavLink to="/">
    <button class="button"><HomeIcon></HomeIcon></button>
    </NavLink>

    <NavLink to="/Calender">
    <button class="button"><CalendarMonthIcon></CalendarMonthIcon></button>
    </NavLink>

  </div>
  <div class="logo">
    EditTime
  </div>
  <div class="right-button">
    
    <button class="button"><PersonIcon/></button>
  </div>
</div>
     )
}
export default Navigation_Bar;
