const express = require('express');
const router = express.Router();

//get students
router.get('/',(req,res) =>{
    res.status(200).json({
        message:'Getting all Students'
    })
});

//get student by id 
router.get('/:id',(req,res)=>{
    const studentID = req.params.id
    res.status(200).json({
        message:'getting a student '
    })
});

//add a new student 
router.post('',(req,res) =>{
    res.status(201).json({
        message:"added student"
    })
});

//update student 
router.patch('/:id',(req,res) => {
    const studentID = req.params.id
    res.status(200).json({
        message:"updated student"
    })
})

//Delete student
router.patch('/:id',(req,res) => {
    const studentID = req.params.id
    res.status(200).json({
        message:"updated student"
    })
});


module.exports = router ;