const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    eventName:{
        type:String,
        required: true
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
   },
   votable:{
    type:Boolean,
    required:true
   }
})

module.exports = mongoose.model('event',eventSchema)