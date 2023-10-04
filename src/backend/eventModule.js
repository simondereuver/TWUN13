const mongoose = require('mongoose');

const CalendarDayEvents = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    eventname:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required:true
    },
    time:{
        type: String,
        required: true
    },
    location:{
        type: String,
    },
    agenda:{
        type: String,
    }
}) 

module.exports = mongoose.model('EventInfo', CalendarDayEvents);