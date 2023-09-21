import React from 'react';
import './schedulingPopup.css';
import BasicTimePicker from './timePicker';

const  SchedulingPopup = () => {
    return ( 
        <div className="popup" >
            <div className='date'>Date</div>
            <div className="cudGrid">
                <button className="create">create</button>
                <button className="update">update</button>
                <button className="delete">delete</button>
            </div>
            <BasicTimePicker/>
            <h3>AvalibleTimes</h3>
            <h3>Location</h3>
            <h3>Attendees</h3>
            <h3>Agenda</h3>
            <h3>UserRoles</h3>
        </div>
     );
}
 
export default SchedulingPopup;