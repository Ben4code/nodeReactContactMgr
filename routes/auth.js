const express = require('express')
const router = express.Router();


// Route: GET api/auth
// Get the logged in user
// Private
router.get('/', (req, res) => {
    res.send("Get logged in user")    
})

// Route: POST api/auth
// Auth user and get token
// Private
router.post('/', (req, res) => {
    res.send("Authenticate and log in user")    
})



module.exports = router;