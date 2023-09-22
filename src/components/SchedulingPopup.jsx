import './schedulingPopup.css';
import MultiChoiceDropdown from './MultiChoiceDropdown';
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
            <textarea className='location'
                value={text}
                onChange={handleChange}
                placeholder="Location"
                style={{
                    width: '50%',
                    height: '35px',
                    padding: '8px',
                    boxSizing: 'border-box',
                    border: '1px solid gray',
                    borderRadius: '8px',
                    resize: 'none', 
                }}/>
            <div>
                <textarea className='agenda'
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
                    resize: 'none', 
                }}/>
            </div>
            <MultiChoiceDropdown/>
            <h3>UserRoles</h3>
        </div>
     );
}
 
export default SchedulingPopup;