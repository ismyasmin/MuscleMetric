// entry file

//register the express app
const express = require('express');
 
// starts up express app 
const app = express(); //  invoke function

// routes
// react to requests - set up a route handler
app.get('/', (req,res) => {
    res.json({mssg: 'Welcome to the app'}) // sends json string, property called mssg
}) // once it goes into domain, then fire a function which is gonna handle that request

// listen for requests
app.listen( () => {
    console.log('listening on port 4000');
});