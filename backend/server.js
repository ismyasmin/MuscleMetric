// entry file

//register the express app
const express = require('express')
const workoutRouter = require('./routes/workouts')

// starts up express app 
const app = express(); //  invoke function


// middleware
app.use(express.json())

// routes
app.use('/api/workouts', workoutRouter) //  when this request is fired, use routes in workoutRoutes which is added onto '/api/workouts'

// listen for requests
app.listen( () => {
    console.log('listening on port 4000')
});