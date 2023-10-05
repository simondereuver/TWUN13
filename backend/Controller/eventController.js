//Models
const User = require('../Models/Models');
const Event = require('../Models/Events')
const mongoose = require('mongoose')


    const getUserEvents = async (req, res) => {
        try {

            const { id,date } = req.params;  
            const user = await User.findOne({ email: id });
            const events = await Event.find({attendies: id,date:date})

            if(!events)
            {
                return res.status(404).json({mssg: "No Events found"}) 
            }
            
          }
      catch(error){
        return res.status(500).json({error:error})
      }
    }

    const getUserEventsTime = async (req,res) => {
        try{
            const {id,date,time} = req.params

            const user = await User.findOne({email: id})
            const events = await Event.find({email:id,date:date,time:time})
    
        if(!events)
        {
            return res.status(404).json({mssg:"No events found"})
        }
    
        }
        catch(error){
            return res.status(500).json({mssg:"Internal Server error"})
        }
    }


module.exports = {
    getUserEvents,
    getUserEventsTime
};
