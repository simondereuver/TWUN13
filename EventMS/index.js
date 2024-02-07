const express = require('express')
const app = express()
const PORT = 5001
const User = require('../Models/Models');
const Event = require('../Models/Events')
const mongoose = require('mongoose')
const axios = require('axios')

//Internal Routes
app.get('/:id/:date',getUserEvents)
app.get('/:id/:date/:time',getUserEventsTime)
app.post('/',createEvent)
app.patch('/:id/:date/:time',updateEvent)
app.delete('/:id/:date/:time', deleteEvent)

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

mongoose.connect(process.env.DATABASE_ACESS)
    .then(() => {
        console.log('Before app.listen');
        app.listen(PORT,() => console.log("FILL THIS HOLE"))
        console.log('After app.listen');})
    .catch((error) =>{console.log(error)})

app.listen(PORT,() =>{
    console.log("Event Microservice is started")
})


//API: Endpoint: /api/events/:id
//WHAT: Updates a user on a PATCH reqqust 
//USE: PATCH localhost.../api/users/id 
// PATCH localhost../api/users/bababoi@gmail.com
//BODY {"email": "bababoi@gmail.com", "password": "secure"}

    const getUserEvents = async (req, res) => {
        try {
            const { id,date } = req.params;  
            const events = await Event.find({attendies: id , date: date})
            console.log(events)
            if(events.length <= 0)
            {
                return res.status(404).json({mssg: "No Events found"}) 
            }
            return res.status(200).json(events);
            
          }
      catch(error){
        return res.status(500).json({error:error})
      }
    }

    const getUserEventsTime = async (req,res) => {
        try{
            const {id,date,time} = req.params
            
            const events = await Event.findOne({email:id, date:date, time:time})
    
            if(!events)
            {
                return res.status(202).json(0)
            }
        return res.status(200).json(events);

        }
        catch(error){
            return res.status(500).json({mssg:"Internal Server error"})
        }
    }


//API: Endpoint: /api/events/
//WHAT: Creates a new event 
//USE: PATCH localhost.../api/events/
        //BODY {"email", "eventName", "date", "time", location, agenda, attendies, votable }

    const createEvent = async (req, res) => {
        try {
            const { email, eventName, date, time, location, agenda, attendies, userRole } = req.body;
            const event = await Event.create({
                email,
                eventName,
                date,
                time,
                location,
                agenda,
                attendies,
                userRole
            });
    
            if (!event) {
                return res.status(400).json({ error: "Could not create event" });
            }
    
            // Send a success response
            return res.status(201).json({ message: "Event created successfully", event });
        } catch (error) {
            console.error("Error creating event:", error);
            // Handle the error and send an appropriate response
            return res.status(500).json({ error: error.message });
        }
    };
    

    const updateEvent = async (req, res) => {
        const { id,date,time} = req.params;
      
        // Check if the provided parameter is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
          // If it's not a valid ObjectId, assume it's an email
          try {
            const user = await Event.findOneAndUpdate({ email: id, date: date, time: time }, { ...req.body });

      
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
            }
      
            return res.status(200).json({ message: 'User was updated' });
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
        }
      };

const deleteEvent = async (req,res) => {
    try{
        const {id,date,time} = req.params
            
        const events = await Event.findOneAndDelete({email:id, date:date, time:time})
        console.log('del');
      }
      catch(error)
      {
        return res.status(400).json({ error: error.message })
      }
    }


