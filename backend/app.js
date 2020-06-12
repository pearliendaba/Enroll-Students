const express = require('express');
const app = express();
const studentRoute = require('./routes/Student')

//student route
app.use('/students',studentRoute );

//default route
app.use('/' , (req,res) =>{
    res.status(200).json({
        message:"welcome to enroll student backend"
    })
});

module.exports = app;