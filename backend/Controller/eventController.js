//Models
const User = require('../Models/Models');
const Event = require('../Models/Events')
const mongoose = require('mongoose')


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
            if(!events)
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
            const { id, date, time } = req.params;

            const event = await Event.find({ email: id, date: date, time: time });
        
            // Check if an event was found, and return 0 if not
            if (event) {
              // Do something with 'event'
              res.status(200).json(event);
            } else {
              // Return 0 when no event is found
              res.status(200).json({ message: "Event not found", result: 0 });
            }}
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
            const { email, eventName, date, time, location, agenda, attendies } = req.body;
            const event = await Event.create({
                email,
                eventName,
                date,
                time,
                location,
                agenda,
                attendies,
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
    const {id,date,time} = req.body
    try{
         if (!mongoose.Types.ObjectId.isValid(id)) {
            const event = await Event.findByIdAndDelete({email:id,date:date,time:time})

            if(!event){
                return res.status(404).json({error: 'No event found to delete'})
            }
            res.status(200.).json({message:'User was deleted'})
        }
      }
      catch(error)
      {
        return res.status(400).json({ error: error.message })
      }
    }


module.exports = {
    getUserEvents,
    getUserEventsTime,
    createEvent,
    updateEvent,
    deleteEvent
};
