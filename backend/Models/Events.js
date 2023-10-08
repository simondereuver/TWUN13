const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    eventName:{
        type:String,
    },
    date:{
        type:Date,
        required:true
    },
   time:{
    type:String,
    required:true,
   },
   location:{
    type:String
   },
   agenda:{
    type:String,
   },
   attendies:{
    type:Array,
   }
})

module.exports = mongoose.model('event',eventSchema)