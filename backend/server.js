// entry file
require('dotenv').config()
//register the express app
const express = require('express')
const mongoose = require('mongoose')
const workoutRouter = require('./routes/workouts')

// starts up express app 
const app = express(); //  invoke function


// middleware
app.use(express.json())

// routes
app.use('/api/workouts', workoutRouter) //  when this request is fired, use routes in workoutRoutes which is added onto '/api/workouts'

// connect to db
mongoose.connect(process.env.MONG_URI) // asynchronous so it takes bit of time, it returns a promise
 .then(() =>{
    // listen for requests once connected to db
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port');
    });
 })
 .catch((err)=>{
    console.log(err);
 })
 
