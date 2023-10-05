//Models
const User = require('../Models/Models');
const mongoose = require('mongoose')
const { validateFirstname, validateLastname, validateEmail, validatePassword } = require('./InputValidation');

//API: Endpoint: /api/users/id 
//WHAT: Returns a user from database based on MONGO ID or email
//USE: GET localhost.../api/users/123 (for ID)
    //GET localhost.../api/users/bababoi@gmail.com

//TESTED: WORKS

const getUser = async (req, res) => {
  try {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      // If  not a valid id assume its an email
      const user = await User.findOne({ email: id });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(user);
    }

    // If a valid ObjectId, find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};


//API: Endpoint: /api/users/
//WHAT: Creates a user based on a POST Request
//USE: POST localhost.../api/users/
        //BODY {"email": "bababoi@gmail.com", "password": "secure"}

//TESTED: WORKS
const createUser = async (req, res) => {

  //extract the information from the user input
  const userData = req.body;  
  const email = userData.email;
  const password = userData.passwordOne;
  const passwordTwo = userData.passwordTwo; 

  //Some console logs for bug searching
  console.log("Before validating");

  if (!validateEmail(email)) {
    console.log("Validating email failed");
    return res.status(400).json({ error: "Email" });
  }
  if (!validatePassword(password, passwordTwo)) {
    console.log("Validating password failed");
    return res.status(400).json({ error: "Password" });
  }
  
  /*
  FINISH THIS IMPLEMENTATION ONCE USERSCHEMA IN DATABASE HAS BEEN UPDATED
  if (!validateFirstName(userData.firstname)) {
    return res.status(400).json({ error: 'Invalid firstname' });
  }
  if (!validateLastName(userData.lastname)) {
    return res.status(400).json({ error: 'Invalid lastname' });
  }
  */

  console.log("After validating");
  
  //Try adding the user to database
  try {
    const user = await User.create({ email, password });
    console.log("usercontroller3");
    res.status(200).json(user);
  } catch (error) {
    console.log("usercontroller4");
    console.log("Error:", error);
    res.status(400).json({ error: error.message });
  }
};

//API: Endpoint: /api/users/id
//WHAT: Updates a user on a PATCH reqqust 
//USE: PATCH localhost.../api/users/id 
    // PATCH localhost../api/users/bababoi@gmail.com
        //BODY {"email": "bababoi@gmail.com", "password": "secure"}

//TESTED: WORKS

const updateUser = async (req, res) => {
  const { id } = req.params;

  // Check if the provided parameter is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    // If it's not a valid ObjectId, assume it's an email
    try {
      const user = await User.findOneAndUpdate({ email: id }, { ...req.body });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json({ message: 'User was updated' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // If a valid ObjectId, update the user by ID
  try {
    const user = await User.findByIdAndUpdate(id, { ...req.body });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ message: 'User was updated' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser
};
