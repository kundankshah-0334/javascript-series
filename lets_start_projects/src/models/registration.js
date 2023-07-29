const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true 
    },
    email :{
        type : String,
        required : true ,
        unique : true 

    },
    phone : {
        type : Number,
        required : true,
        unique : true 

    },
    password:{
        type : String,
        required : true 

    },
    confirmpassword:{
        type : String
    }
});


userSchema.pre("save" , async function (next){
    if(this.isModified("password")){

        console.log(`${this.password}`);
        this.password  = await bcrypt.hash(this.password ,10);
        console.log(`${this.password}`);
        // this.password = await bcryptjs.hash(this.password , 10 )
        this.confirmpassword = undefined ;
    }
    next();
})

const Register = new mongoose.model("Register" , userSchema );

module.exports = Register;