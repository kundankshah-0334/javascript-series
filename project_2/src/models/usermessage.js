const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type:String,
        rquired : true
    },
    email : {
        type:String,
        rquired : true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new error ("Invalid Email");
            }
        }
    },
    phone : {
        type:String,
        rquired : true,
        min : 10
    },
    message : {
        type:String,
        rquired : true,
        minLength : 5
    },
    date : {
        Date: {
           type : Date,
           default : Date.now()
        }
    }

});

const User = mongoose.model("User" , userSchema);

module.exports = User;