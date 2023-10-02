const mongoose = require('mongoose');

//This is where you put the schemas "templates" for the data you want to store in the template

const SignUpTemplate = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}) 

module.exports = mongoose.model('SignUp',SignUpTemplate);