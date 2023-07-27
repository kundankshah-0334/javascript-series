const express = require("express");
const app = express();

require("./db/conn.js");

app.use(express.json());

const StudentModal = require("./model/students.js")

const port = process.env.PORT || 8000 ;

const validator = require("validator");
const mongoose = require("mongoose");

// app.post("/students" , (req , res) => {

//     console.log(req.body);
//     const user = new StudentModal(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// });

app.post("/students" , async (req,res) => {
    try{
        const user =  new StudentModal(req.body);
        const result = await user.save();
        res.status(201).send(result);
  }catch(e){
    return res.status(500).send({error: e });
  }
});
 
app.get("/students" ,async(req , res) => {
    try{
        const studentData = await StudentModal.find();
        res.status(201).send(studentData);
    }catch(e){
        res.status(400).send(e);
    }
});

app.get("/students/:id", async (req , res) => {
   try{
        const _id = req.params.id;
        const studentData = await StudentModal.findById(_id);
        res.send(studentData);

   }catch(err){
    res.status(500).send(err);
   }
});
 
 
app.listen(port ,  () =>{
    console.log(`Connection succesful`);
});

