const mysql = require('mysql');


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"enrollment",

 
});

con.connect(function(err) {
  if(err){
    console.log(err)
  }else{
  console.log('connected to the database')
}
});


module.exports = con ;