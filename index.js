const express = require ('express');
const app = express (); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
//const postRoute = require ('./routes/posts')
 //import routes 
 const authRoute = require('./routes/auth');
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true},() =>
 console.log('connected to db!'));


//Middleware
app.use(express.json());







//Route Middleware
app.use('/api/user', authRoute);
//app.use('api/posts', postRoute);

app.listen(3000, () => console.log('Server up and running'));