const express = require('express');
const connect = require('./connection'); // (/) lgaya kyuki yeh humne bnaya hai
const student = require('./routes/student');
const app = express();
connect();//function import kiya tha toh call lgaya
app.use(express.json());
app.use(student);

//localhost:3000/add/user





app.listen(3000,(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log("server is running on 3000");
  }
})