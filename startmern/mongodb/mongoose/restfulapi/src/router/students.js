const express = require("express");

const router = new express.Router();

 const StudentModal = require("../model/students");
router.post("/students" , async (req,res) => {
    try{
        const user =  new StudentModal(req.body);
        const result = await user.save();
        res.status(201).send(result);
  }catch(e){
    return res.status(500).send({error: e });
  }
});
 
router.get("/students" ,async(req , res) => {
    try{
        const studentData = await StudentModal.find();
        res.status(201).send(studentData);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get("/students/:id", async (req , res) => {
   try{
        const _id = req.params.id;
        const studentData = await StudentModal.findById(_id);
        res.send(studentData);

   }catch(err){
    res.status(500).send(err);
   }
});
 

router.patch("/students/:id" , async(req,res) => {
    try{
        const _id = req.params.id;
        const result = await StudentModal.findByIdAndUpdate( _id , req.body , {new : true});
        
        return res.send(result);
         
         
    }catch(e){
        res.send.status(400).send(e);
    }
});
 

router.delete("/students/:id" , async(req,res) => {
    try{
        // const id = req.params.id;
        const result = await StudentModal.findByIdAndDelete(req.params.id);
        if(!result){
            return res.status(400).send();
            
        }
        res.send(result);
            // console.log(result);
        
    }catch(e){
        res.send.status(500).send(e);
    }
});

module.exports = router;
