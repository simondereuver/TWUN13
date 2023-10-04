const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
})

//This creates a collection of element user into a collection of Users
module.exports = mongoose.model('User',userSchema)