import React from "react";
import "../App.css";
import { SidepanelData } from "./SidepanelData";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom'

function SidePanel() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="SidePanel">
            <List className="SidePanelList">
                {SidepanelData.map(item => (
                    <ListItem className="bar"
                        key={item.text}
                        onClick={() => navigate(item.path)}
                        id={location.pathname === item.path ? "active" : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default SidePanel;
