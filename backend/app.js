
require('dotenv').config() // invoke config() - going to attach those env vars to the process object
const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.json({msg: 'testing'})


})

app.listen(process.env.PORT, () => {
    console.log('listening')
});

