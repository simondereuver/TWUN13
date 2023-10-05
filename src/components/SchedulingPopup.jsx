import './schedulingPopup.css';
import MultiChoiceDropdown from './MultiChoiceDropdown';
import BasicTimePicker from './timePicker';
import React, {useState} from 'react';
import axios from 'axios';
//import eventSchema from '../../backend/Models/Events';

function SchedulingPopup({formattedDate}) {

    const [textAgenda, setTextAgenda] = useState('');
    const handleChangeAgenda = (e) =>{
        setTextAgenda(e.target.value);
    }

    const [textLocation, setTextLocation] = useState('');
    const handleChangeLocation = (e) =>{
        setTextLocation(e.target.value);
    }

    const [textEventName, setTextEventName] = useState('');
    const handleEventName = (e) =>{
        setTextEventName(e.target.value);
    }
   

    const AddEvent = () =>{

        const atendees = ['a','n'];
        const newEventData = {
          email: 'samuel.leyonberg@gmail.com',
          eventname: {textEventName},
          date: '12',
          time: '123',
          location: {textLocation},
          agenda: {textAgenda},
          atendees: atendees
        };
        console.log("called");
        //const newEvent = new eventSchema(newEventData);
         /* 
          axios.get('http://localhost:3001/api/events/samuel.leyonberg@gmail.com/12/123')
          .then(response => {
            /*
            if(response.data.length !== 0)
            {
                alert("There is already an event for this time");
            }
            else{
            */
                axios.post('http://localhost:3001/api/events', newEventData)
                console.log("added")
            //}
            /*
          })
          .catch(err => {
            console.log(err);
            console.log("not added")
          })
        */
    }

    /*
    const UpdateEvents = () => {
        const updatedEvent = new EventModuel
        const queryParams = {
            email: 'Samuel.leyonberg@gmail.com',
            eventName: 'Test',
          };
          
          const config = {
            params: queryParams,
          };
          
          axios.get(apiUrl, config)
          .then(response => {
            if(response.data.length == 0)
            {
                alert("There is no an event for this time");
            }
            else{
                axios.put(apiUri, updatedEvent)
            }
          })          
          .catch(err => {
            console.log(err);
          })
    }

    const DeleteEvents = () => {
        const queryParams = {
            email: 'Samuel.leyonberg@gmail.com',
            eventName: 'Test',
          };
          
          const config = {
            params: queryParams,
          };
          
          axios.get(apiUrl, config)
          .then(response => {
            if(response.data.length == 0)
            {
                alert("There is no an event for this time");
            }
            else{
                axios.delite(apiUri, config);
            }
          })          
          .catch(err => {
            console.log(err);
          })

    }
*/


    return ( 
        <div className="popup" >
            <div className='dateBox'>
                <header>{formattedDate}</header>
            </div>
            <div className="cudGrid">
                <button className="create" onClick={AddEvent}>create</button>
                <button className="update" >update</button>
                <button className="delete" >delete</button>
            </div>
            <div>
                <textarea className='eventName'
                value={textEventName}
                onChange={handleEventName}
                placeholder="eventName"
                style={{
                    width: '50%',
                    height: '35px',
                    padding: '8px',
                    boxSizing: 'border-box',
                    border: '1px solid gray',
                    borderRadius: '8px',
                    resize: 'none', 
                }}/>
            </div>
            <BasicTimePicker/>
            <h3>AvalibleTimes</h3>
            <textarea className='location'
                value={textLocation}
                onChange={handleChangeLocation}
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
                value={textAgenda}
                onChange={handleChangeAgenda}
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