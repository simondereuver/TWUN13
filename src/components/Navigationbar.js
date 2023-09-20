import React, { useState } from 'react';
import "../App.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import LoginWindow from './LoginComponent';

function Navigation_Bar()
{

  //Function and variables to handle toggle of login window
  const [loginWindowOpen, setLoginWindowOpen] = useState(false);

  const toggleLoginWindow = () => {
    setLoginWindowOpen(!loginWindowOpen);
  };

    return (

      <div class="banner">
        <div class="left-buttons">
          <Button className="button"><HomeIcon></HomeIcon></Button>
          <Button className="button"><CalendarMonthIcon></CalendarMonthIcon></Button>
        </div>
        <div class="logo">
          EditTime
        </div>
        <div class="right-button">
          <Button className="button" onClick={toggleLoginWindow}><PersonIcon/> </Button>
        </div>
        <div>
          {/* Render LoginWindow when loginWindowOpen is true */}
          {loginWindowOpen && <LoginWindow />} 
        </div>
      </div>
     )
}
export default Navigation_Bar;
