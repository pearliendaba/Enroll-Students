const express = require('express');
const app = express();
const studentRoute = require('./routes/Student')
const  bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

//student route
app.use('/students',studentRoute );

//default route
app.use('/' , (req,res) =>{
    res.status(200).json({
        message:"welcome to enroll student backend"
    })
});

module.exports = app;