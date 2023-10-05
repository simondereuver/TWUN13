//Models
const User = require('../Models/Models');
const Event = require('../Models/Events')
const mongoose = require('mongoose')


    const getUserEvents = async (req, res) => {
        try {

            const { id,date } = req.params;  
            const user = await User.findOne({ email: id });
            const events = await Event.find({attendies: id,date:date})

            if(!events)
            {
                return res.status(404).json({mssg: "No Events found"}) 
            }
            
          }
      catch(error){
        return res.status(500).json({error:error})
      }
    }

    const getUserEventsTime = async (req,res) => {
        try{
            const {id,date,time} = req.params
            console.log('getUserEventsTime called');
            const events = await Event.findOne({email:id,date:date,time:time})
            console.log(events);
    
        if(!events)
        {
            return res.status(404).json({mssg:"No events found"})
        }
    
        }
        catch(error){
            return res.status(500).json({mssg:"Internal Server error"})
        }
    }

    const createEvent = async (req, res) => {
        try {
            const { email, eventName, date, time, location, agenda, attendies } = req.body;
            const event = await Event.create({
                email,
                eventName,
                date,
                time,
                location,
                agenda,
                attendies
            });

            if (!event) {
                return res.status(400).json({ error: "Could not create event" });
            }

            // Send a success response
            return res.status(201).json({ message: "Event created successfully", event });
        } catch (error) {
            console.error("Error creating event:", error);
            // Handle the error and send an appropriate response
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };



module.exports = {
    getUserEvents,
    getUserEventsTime,
    createEvent
};
