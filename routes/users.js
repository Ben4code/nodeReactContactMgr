const express = require('express')
const router = express.Router();


// Route: POST api/users
// Register a user
// Public
router.post('/', (req, res) => {
    res.send("Registers a user")    
})


module.exports = router;