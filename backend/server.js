const express = require('express')  
require('dotenv').config()
const userRoutes = require('../backend/Routes/Users')
const mongoose = require('mongoose')
const cors = require('cors');

//express App
const app = express()

//MiddleWare
app.use(express.json())
app.get((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// Enable CORS for all routes
app.use(cors());

//Routes
app.use('/api/users',userRoutes)

//console logs added for problem searching
console.log('Before mongoose.connect');
//Connection Database
mongoose.connect(process.env.DATABASE_ACESS)
    .then(() => {
        console.log('Before app.listen');
        app.listen(3001,() => console.log('listening on port 3001'))
        console.log('After app.listen');})
    .catch((error) =>{console.log(error)})
