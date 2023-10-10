const express = require('express');
const {createUser,getUser,updateUser, getAllUsers} = require('../Controller/userController')

//Router
const Userrouter = express.Router();

//Get user
Userrouter.get('/:id',getUser)

//Create a new user
Userrouter.post('/', createUser)

//Update a user 
Userrouter.patch('/:id',updateUser)

Userrouter.get('/', getAllUsers)

module.exports = Userrouter;
