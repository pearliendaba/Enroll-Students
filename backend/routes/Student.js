const express = require('express');
const router = express.Router();
const con = require('../connection');

//get students
router.get('/',(req,res) =>{

    let sql = `Select Student.*, Module.ModuleName
    From Student
    JOIN Enrollment
    ON Student.StudentID = Enrollment.StudentID
    JOIN Module
    ON Enrollment.ModuleID = Module.ModuleID;`

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
        res.send({result})
    }
})
});

//get module
router.get('/module/:id',(req,res) =>{
    var id = req.params.id
    let sql = `Select ModuleName
    From Module
    Where ModuleID = ?;`

    con.query(sql,[id],(err,result) => {
        console.log(result)
    if(err){
        res.status(404).json({
            message:`can't find the module`
        })
    }else{
        res.status(200).json({
            message:'Getting all Modules',
            result
        })
    }
})
});


//get student by id 
router.get('/:id',(req,res)=>{
    var id = req.params.id
    var sql = `Select Student.*, Module.ModuleName
    From Student
    JOIN Enrollment
    ON Student.StudentID = Enrollment.StudentID
    JOIN Module
    ON Enrollment.ModuleID = Module.ModuleID
    Where Student.StudentID = ?`;

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
router.post('/',(req,res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(dateTime);
    var sql1 = "INSERT INTO `Student`(`StudentName`,`Email`, `Date_Registered`,`Date_Edited`) VALUES ('"+req.body.StudentName+"','"+req.body.Email+"','"+req.body.Date_Registered+"','"+req.body.Date_Edited+"')"

    con.query(sql1, function(err,result){
        if(err){
            console.log(err)
        }else{
            res.status(200).json({
                message:'added a student',
                result
            })
        }
    })
})


//update student 
router.patch('/:id',(req,res) => {
    var id = req.params.id

    var sql = `UPDATE Student 
    INNER JOIN Enrollment ON Student.StudentID = Enrollment.StudentID
    INNER JOIN Module ON Module.ModuleID = Enrollment.ModuleID
    SET StudentName=?, Email=?, Date_edited= ?,Module.ModuleName= ?
    WHERE StudentID = ?;`

    con.query(sql, [id], function (err, result) {
        if(err){
            res.status(404).json({
                message:`cannot update`
            })
        }else{
            res.status(200).json({
                message:'updated student',
                result
            })
        }
});
})


//Delete student
router.delete('/:id',(req,res) => {
        var id = req.params.id
        var sql = ' DELETE FROM `Student` WHERE StudentID = ?';
        con.query(sql, [id], function (err, result) {
            if(err){
                res.status(404).json({
                    message:`cannot delete`
                })
            }else{
                res.status(200).json({
                    message:'deleted student',
                    result
                })
            }
    });

    });



module.exports = router ;