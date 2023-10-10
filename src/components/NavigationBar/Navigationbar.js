import React, { useState } from 'react';
import "../../App.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ViewSidebarOutlined } from '@mui/icons-material';
import { SidepanelDataHome} from '../Sidepanel/SidepanelData';
import SidePanel from '../Sidepanel/Sidepanel';

function Navigation_Bar()
{
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
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
          <NavLink to="/Login">
          <Button className="button"> <PersonIcon/> </Button>
          </NavLink>
        </div>
      </div>
     )
}
export default Navigation_Bar;
