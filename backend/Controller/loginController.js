const User = require('../Models/Models');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {
       
        const { email, password } = req.body;
        //check if there is a user with email entered in login
        console.log("Checking email in mongo")
        const user = await User.findOne({ email: email });
        console.log(user);
        console.log(password)


        if (!user) {
            console.log("Didnt find by email");
            return res.status(404).json({ error: 'Email' });
        }

        if (user.password !== password)
        {
            return res.status(404).json({ error: 'Password' });
        }

        const token = jwt.sign({email},process.env.KEY,{expiresIn:'1h'})
        console.log(token)
        
        
        return res.status(200).json({ message: "Successfully logged in!"});
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = loginUser;