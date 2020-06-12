const express = require('express');
const router = express.Router();
const con = require('../connection');

//get students
router.get('/sam',(req,res) =>{

    let sql = 'SELECT * FROM Student'
    console.log(sql)
    con.query(sql,(err,result) => {
        console.log(result)
    if(err){
        res.status(404).json({
            message:`can't find the students`
        })
    }else{
        res.status(200).json({
            message:'Getting all Students',
            result
        })
    }
})

});

//get student by id 
router.get('/:id',(req,res)=>{

    var id = req.params.id
    var sql = 'SELECT * FROM Student WHERE StudentID = ?';
    con.query(sql, [id], function (err, result) {
        if(err){
            res.status(404).json({
                message:`can't find the students`
            })
        }else{
            res.status(200).json({
                message:'Getting all Students',
                result
            })
        }
});

});


//add a new student 
router.post('',(req,res) =>{

    
    // let sql = 'INSERT INTO Student (StudentName, Email, Date_Registered, Date_Edited) VALUES (?,?,?,?)'
    // con.query(sql,(err, result,fields)=> {
    //     if(err){

    //         console.log(err.message)
    //     }else{
    //         console.log(result)

    //     }
    // });
        
    
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