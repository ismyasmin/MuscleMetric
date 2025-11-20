const express = require('express')

const router = express.Router(); // creates an instance of the router

// attach handler to the router

// GET all workouts
router.get('/', (req, res) =>{
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})

}) // : represents a route parameter whereby this can change

// POST a new workout to create one
const Workout = require('../models/workoutModel') // workout model 

// POST a new workout to create one
// creat a new workout document inside the workouts collection, gonna use workouts model to do this

router.post('/', async(req, res) =>{  // changing handler function to an asynchronous function to use await 
    console.log('POST /api/workouts hit')
    const {title, reps, load} = req.body
    try {
        // represents document created
        const workout = await Workout.create({title, reps, load}) // asynchronous
        res.status(200).json(workout) // json sent back is the workout document
    }catch (err){
        res.status(400).json({error: err.message})

    }
})

// DELETE a workout
router.delete('/:id', (req, res) =>{ // id of what's to be deleted
    res.json({mssg: 'DELETE a new workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'PATCH a new workout'})
})

// after creating routes, export to be used externally, then require all routes attached to it in server.js
module.exports = router

