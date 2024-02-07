const express = require('express')
const app = express()
const PORT = 5000;

const axios = require('axios')

//Routes definitions

// Define the login route and forward requests to the corresponding microservice
app.get('/api/login', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:3001/api/login'); // Request to Service 1: API login
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error communicating with API login' });
    }
});

//Calender Routes

//User Routes



//Gateway Start

app.listen(PORT,() => 
{
    console.log(`API Gateway is running on ${PORT}`)
})