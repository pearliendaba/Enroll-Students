const express = require('express');
const app = express();
const studentRoute = require('./routes/Student')
const  bodyParser = require('body-parser')
var cors = require('cors')




app.use(cors());

// app.use(function(req,res){
//     res.setHeader('Access-Control-Allow-Origin' ,'*')
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
// res.setHeader('Access-Control-Allow-Headers','X-Requested-With, Content-Type')
// res.setHeader('Access-Control-Allow-Credentials',true)

// })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 

//student route
app.use('/students',studentRoute );

//default route
app.use('/' , (req,res) =>{
    res.status(200).json({
        message:"welcome to enroll student backend"
    })
});

module.exports = app;