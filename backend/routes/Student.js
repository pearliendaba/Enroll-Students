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
router.post('/',(req,res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(dateTime);
    var sql = "INSERT INTO `Student`(`StudentName`,`Email`, `Date_Registered`,`Date_Edited`) VALUES ('"+req.body.StudentName+"','"+req.body.Email+"','"+req.body.dateTime+"','"+req.body.dateTime+"');"
    con.query(sql,function(err,result){
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
    var sql = "UPDATE Student SET StudentName='"+req.body.StudentName+"', Email='"+req.body.Email+"' WHERE StudentID = ?";
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