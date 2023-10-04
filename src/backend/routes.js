const express = require('express');
const router = express.Router();
const { request } = require('http');
import {CalendarDayEvents} from './Models';

router.post('/signup',(req,res) =>
{
    const newUser = new CalendarDayEvents({
        email:request.body.email,
        password:request.body.password
    })
    newUser.save()
    .then(data =>{
        express.response.json(data);
    })
    .catch(error => {
        express.response.json(error);
    })
});

module.exports = router;