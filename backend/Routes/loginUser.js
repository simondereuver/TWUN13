const express = require('express');
const loginUser = require('../Controller/loginController')

//Router
const Loginrouter = express.Router();

//Try login user
Loginrouter.post('/', loginUser);

module.exports = Loginrouter;