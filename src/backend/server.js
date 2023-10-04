const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv');
const { EnergySavingsLeaf } = require('@mui/icons-material');
const SignUp = require("../backend/Models");
const eventModule = require('../backend/eventModule'); 

env.config();

// If problems with Nodemon kör powershell som admin och kör
//Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

function ConnectToDatabase()
{
    mongoose.connect(process.env.DATABASE_ACESS, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected");
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });

app.listen(5000, () =>{
    console.log("listening on port 5000");
})

}
ConnectToDatabase();
TestDatabase();
//AddEvent();
 


async function TestDatabase()
{
    const user = new SignUp(
        {
            email:'Hello',
            password:'pass'
            
        });
    user.save();
    let test = await SignUp.findOne({ email:'Hello' });
    console.log(test);
}

/*
async function AddEvent()
{
    const newEvent = new eventModule({
        email: "samuel.leyonberg@gmail.com",
        eventname: "test",
        date: new Date().toDateString(),
        time: "123",
        location: "here",
        agenda: "Just for test"
    });
    newEvent.save();
    let test = await eventModule.findOne({ email:'samuel.leyonberg@gmail.com' });
    console.log(test);
}
*/