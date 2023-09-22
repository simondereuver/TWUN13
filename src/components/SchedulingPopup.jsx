import './schedulingPopup.css';
import BasicTimePicker from './timePicker';
import React, {useState} from 'react';

function SchedulingPopup() {

    const [text, setText] = useState('');
    const handleChange = (e) =>{
        setText(e.target.value);
    }

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
            <textarea
        value={text}
        onChange={handleChange}
        placeholder="Agenda"
        style={{
          width: '70%',
          height: '70px',
          padding: '8px',
          boxSizing: 'border-box',
          border: '1px solid gray',
          borderRadius: '8px',
          resize: 'none', // Disable resizing
        }}
      />
            <div className='agendaContainer'>
                <button className='agendabutton'>
                    Submit
                </button>
            </div>

            <h3>UserRoles</h3>
        </div>
     );
}
 
export default SchedulingPopup;