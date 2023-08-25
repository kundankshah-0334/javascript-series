const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        minlength : 3,
        trim : true
    },
    email :{
        type: String,
        required : true,
        trim : true,
        unique : [true, "email should be unique in the database"],
        validator(value) {
            if(validator.isEmail(value)){
                throw new Error ("INVALID EMAIL")
            }
        }
    },
    phone :{
        type :Number,
        minlength : 10,
        required : true,
    },
    address :{
        type : String,
        require:true
    }
});

const StudentModal = new mongoose.model("Student" , studentSchema);

module.exports = StudentModal;








