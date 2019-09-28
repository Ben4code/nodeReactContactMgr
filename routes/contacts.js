const express = require('express')
const router = express.Router();


// Route:   GET api/contacts
// Desc:    Get all user contacts
// Access:  Private
router.get('/', (req, res) => {
    res.send("Get all contacts for a given user")    
})

// Route: POST api/contacts
// Add new contact
// Private
router.post('/', (req, res) => {
    res.send("Add new contact")    
})

// Route: PUT api/contacts/:id
// Update contact
// Private
router.put('/:id', (req, res) => {
    res.send("Update contact")    
})

// Route: DELETE api/contacts/:id
// Delete contact
// Private
router.delete('/:id', (req, res) => {
    res.send("Delete contact")    
})



module.exports = router;