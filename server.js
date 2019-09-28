const express = require('express')
const app = express();
const mongoose = require('mongoose');



// ------ MongoDb connection -------
// const Db = require('./config/keys').mongoURI;
// mongoose.connect(Db, {useNewUrlParser: true})
// .then(()=> console.log('MongoDB connected'))
// .catch((err)=> console.log(err))



// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`App running on port ${port}`))

