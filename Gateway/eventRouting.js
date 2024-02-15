// eventRouter.js
const express = require('express');
const router = express.Router();
const {getUserEvents, getUserEventsTime,createEvent, updateEvent, deleteEvent} = require('../Event Microservice/Eventfunctions')

router.get('/:id/:date', getUserEvents);
router.get('/:id/:date/:time', getUserEventsTime);
router.post('/', createEvent);
router.patch('/:id/:date/:time', updateEvent);
router.delete('/:id/:date/:time', deleteEvent);

module.exports = router;
