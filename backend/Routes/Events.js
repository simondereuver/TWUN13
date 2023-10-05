const express = require('express');
const {getUserEvents, getUserEventsTime} = require('../Controller/eventController')

const eventRouter = express.Router()


//Get User events on specific date
eventRouter.get('/:id/:date',getUserEvents)

//Get User events on specific time and date
eventRouter.get('/:id/:date/:time',getUserEventsTime)

module.exports = eventRouter