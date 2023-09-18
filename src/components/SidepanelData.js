import React from 'react'

// Find icons here https://mui.com/material-ui/material-icons/
import BedIcon from '@mui/icons-material/Bed';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import EventIcon from '@mui/icons-material/Event';

export const SidepanelData = [
    // Everybox is for 1 tab copy paste for more tabs
    {
        title: "Home",
        icon: <BedIcon />,
        link: "/home"
    },

    {
        title: "Create Event",
        icon: <EventIcon />,
        link: "/Event"
    },

    {
        title: "TBD",
        icon: <QuestionMarkOutlinedIcon />,
        link: "/tbd"
    },

    {
        title: "TBD",
        icon: <QuestionMarkOutlinedIcon />,
        link: "/tbd"
    },

    {
        title: "TBD",
        icon: <QuestionMarkOutlinedIcon />,
        link: "/tbd"
    }
]