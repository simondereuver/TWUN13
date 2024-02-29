const express = require('express');
const app = express();
const {getUser,createUser,updateUser,getAllUsers} = require("./UserFunctions")
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')
const PORT = 5001
const amqp = require('amqplib')
const RabbitURL = "FaKOFF"
const URL = "10.0.128.16"
const QUEUE_NAME = "User_Login_SendQueue"


async function connectToRabbitMQ() {
    try {
        const connection = await amqp.connect(RabbitURL);
        const channel = await connection.createChannel();
        const queue = QUEUE_NAME;
        await channel.assertQueue(queue);
        return channel;
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
        throw error;
    }
}

async function ConsumeMessage() {
    try {
        const channel = await connectToRabbitMQ();
        const queue = QUEUE_NAME;

        console.log("User-Microservice waiting for messages in queue");
        channel.consume(queue, async (message) => {
            try {
                const content = message.content;
                console.log(content);

                //Stringified in sender queue so check if to.string is needed
                const returnMessage = await axios.get(`${URL}/${content}`);
                
                //Change so we return the user?
                if (returnMessage.status === 200) {
                    channel.sendToQueue('Return User', Buffer.from(true));
                } else {
                    channel.sendToQueue('Return User', Buffer.from(false));
                }
            } catch (error) {
                console.error(error);
            }
        });
    } catch (error) {
        console.error(error);
    }
}




// Middleware to log incoming requests
app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    //Implement logging of Requests here
    next();
});

//Get user
app.get('/:id',getUser)

//Create a new user
app.post('/', createUser)

//Update a user 
app.patch('/:id',updateUser)

app.get('/user', getAllUsers)


mongoose.connect("mongodb+srv://userDB:jH3ctwIUnr0nlEGr@user.q5hnsyx.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        app.listen(PORT,() => console.log(`Database has been accessed successfully on ${PORT}`))
        ConsumeMessage()
        })
    .catch((error) =>{console.log(error)})


