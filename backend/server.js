const http = require('http');
const app = require('./app') 
const port = process.env.PORT || 3000; // port where server runs on

const server = http.createServer(app); // creates server


 server.listen(port , () =>{
     console.log("server ruining on http://localhost:" + port)
 })