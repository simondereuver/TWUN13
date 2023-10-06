const express = require('express');
const {createUser,getUser,updateUser} = require('../Controller/userController')



//Router
const Userrouter = express.Router();


//Get user
Userrouter.get('/:id',getUser)

//Create a new user
Userrouter.post('/', createUser)

//Update a user 
Userrouter.patch('/:id',updateUser)

module.exports = Userrouter;
