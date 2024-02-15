const express = require('express');
const app = express();
const {getUserEvents, getUserEventsTime, updateEvent, deleteEvent} = require('../Event Microservice/Eventfunctions')
const Event = require("../Event Microservice/Events")
const user = require("../User-MicroService/Models")
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 5002


// Middleware to log incoming requests
app.use(express.json());
app.use(cors())

app.use((req, res,next) => {
    console.log(req.path, req.method);
    console.log(req.params);
    next();
});


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

app.get('/:id/:date',getUserEvents)
app.get('/:id/:date/:time',getUserEventsTime)
app.post('/event',createEvent)
app.patch('/:id/:date/:time',updateEvent)
app.delete('/:id/:date/:time', deleteEvent)


//mongoose.connect("mongodb+srv://eventDB:o5tjTk5a1qUASHN2@event.pthdyde.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://eventDB:o5tjTk5a1qUASHN2@event.pthdyde.mongodb.net/eventDB?retryWrites=true&w=majority")

    .then(() => {
        app.listen(PORT,() => console.log(`Database has been accessed successfully on ${PORT}`))
        })
    .catch((error) =>{console.log(error)})


