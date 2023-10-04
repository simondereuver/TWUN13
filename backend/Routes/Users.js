const express = require('express');
const {createUser,getUser,updateUser} = require('../Controller/userController')



//Router
const router = express.Router();

router.get('/',(req,res) =>{
    res.json({mssg:'GET USERS'})
})

//Get user
router.get('/:id',getUser)

//Create a new user
router.post('/', createUser)

//Update a user 
router.patch('/:id',updateUser)

module.exports = router;
