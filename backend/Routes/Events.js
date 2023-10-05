const express = require('express');
const {getUserEvents, getUserEventsTime, createEvent} = require('../Controller/eventController')

const eventRouter = express.Router()


//Get User events on specific date
eventRouter.get('/:id/:date',getUserEvents)

//Get User events on specific time and date
eventRouter.get('/:id/:date/:time',getUserEventsTime)

eventRouter.post('/', createEvent)

module.exports = eventRouter