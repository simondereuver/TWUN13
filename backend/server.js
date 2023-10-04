const express = require('express')
require('dotenv').config()
const userRoutes = require('../backend/Routes/Users')
const mongoose = require('mongoose')

//express App
const app = express()

//MiddleWare
app.use(express.json())
app.get((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//Routes
app.use('/api/users',userRoutes)

//Connection Database
mongoose.connect(process.env.DATABASE_ACESS)
    .then(() => {
        app.listen(3001,() => console.log('listening on port 3001'))})
    .catch((error) =>{console.log(error)})
