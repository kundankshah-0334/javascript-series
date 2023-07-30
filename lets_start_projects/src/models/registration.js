const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    },
    tokens : [{
        token : {
            type :String,
            required : true
        }
    }]
});

userSchema.methods.generateAuthToken = async function(){
    try{
        console.log(this._id);
        const token = jwt.sign({_id: this._id.toString()}, "mynameiskundankumarsahuamdiamastudent");
        this.tokens = this.tokens.concat({token : token});
        // console.log(token);
        await this.save();
        return token ;
    }catch(e){
        res.send(`~the error part ${e}`);
        console.log(`~the error part ${e}`);
 
    }
}


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