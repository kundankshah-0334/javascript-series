const express = require("express");
const app = express();

require("./db/conn.js");

app.use(express.json());

const StudentModal = require("./model/students.js")

const port = process.env.PORT || 8000 ;

const validator = require("validator");
const mongoose = require("mongoose");


const studentRouter = require("./router/students.js")
app.use(studentRouter);
// app.post("/students" , (req , res) => {

//     console.log(req.body);
//     const user = new StudentModal(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// });

// const router = new express.Router();

// router.get("/home" , (req ,res)=> {
//     res.send("hello vhdf")
// });



 
app.listen(port ,  () =>{
    console.log(`Connection succesful`);
});

