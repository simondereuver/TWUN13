//Models
const User = require('../Models');
const mongoose = require('mongoose')

//Get Single user
const getUser = async (req,res) =>
{
    try{
        const {id} = req.params
            if(!mongoose.Types.ObjectId.isValid(id))
            {
                return res.status(404).json({error: 'User was not found'})
            }

        const user = await User.findById(id)

        if(!user){
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user)
    }
    catch(error){
        return res.status(500).json({message:'Server error'})
    }
}

//Create User
    const createUser = async(req,res) => {
        const {email,password} = req.body
        try{
            const user = await User.create({email,password})
            res.status(200).json(user)
        }
        catch(error){
            res.status(400).json({error: error.message})
        }
    }

//Update User
const updateUser = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){ //Controlls that the id is a valid mongoose id
        return res.status(404).json({error: 'User was not found'})
    }
    try{
        const user = await User.findOneAndUpdate({_id:id}, {
            ...req.body
        })
        if(!user){
            return res.status(404).json({error: 'User was not found'})
        }
        res.status(200).json({message:'User was updated'})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
module.exports = {
    createUser,
    getUser,
    updateUser
}