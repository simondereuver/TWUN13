import React, { useState } from 'react';
import "../App.css"
import "./Sidepanel.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginWindow from './loginComponent';
import { ViewSidebarOutlined } from '@mui/icons-material';
import { SidepanelDataHome } from '../components/SidepanelData';
import SidePanel from "./Sidepanel";

function Navigation_Bar()
{

  //Function and variables to handle toggle of login window
  const [loginWindowOpen, setLoginWindowOpen] = useState(false);

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  const toggleLoginWindow = () => {
    setLoginWindowOpen(!loginWindowOpen);
  };

    return (

      <div class="banner">
        <div class="left-buttons">
          <NavLink to="/">
            <Button className="button"><HomeIcon></HomeIcon></Button>
          </NavLink>

          <NavLink to="/Calender">
            <Button className="button"><CalendarMonthIcon></CalendarMonthIcon></Button>
          </NavLink>
          <Button className="button" onClick={toggleSidePanel}>
            <SidePanel SideData={SidepanelDataHome} open={isSidePanelOpen} />
            <ViewSidebarOutlined/>
          </Button>
        </div>
        <div class="logo">
          <NavLink to ="/">
            <Button disableRipple style={{ fontSize: '24px' }}>EditTime</Button>
          </NavLink>
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
