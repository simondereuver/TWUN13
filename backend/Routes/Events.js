const express = require('express');
const {getUserEvents, getUserEventsTime,createEvent, updateEvent, deleteEvent} = require('../Controller/eventController')

const eventRouter = express.Router()


//Get User events on specific date
eventRouter.get('/:id/:date',getUserEvents)

//Get User events on specific time and date
eventRouter.get('/:id/:date/:time',getUserEventsTime)

eventRouter.post('/',createEvent)

eventRouter.patch('/:id/:date/:time',updateEvent)

eventRouter.delete('/:id/:date/:time', deleteEvent)

module.exports = eventRouter