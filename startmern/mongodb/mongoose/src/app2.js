const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://localhost:27017/bmongodb', {useNewUrlParser: true , useUnifiedTopology : true})
.then(()=>{
    console.log("Connected to database");
})
.catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        unique : true,
        uppercase: true,
        trim : true ,
        minlength : 2,
        maxlength : 11
    } ,
    age: {
        type : Number,
        //this is a simple mthod 
        // validate(value){
        //     if(value < 0 ){
        //         throw new Error("Age can not be negative....")
        //     }
        // }

        validate : {
            validator : function(value){
                return value > 0
            },
            message : "Age must be 0 or positive"
        }
    },
    course: {
        type : String ,
        required :true ,
        enum : ["python","java","math"],
        lowercase: true
    },
    emailId : {
        type : String,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Emai is not valid")
            }
        }
    },
    city : String,
    status:Boolean,
    date:{
        type:Date,
        default: Date.now
    }
});

const UserModel = new mongoose.model("User" , userSchema);

const userDocument = async () =>{
    try{
        const user11 = new UserModel({
            name:
            "asdfghjkliu",
            age: 78,
            course: "MatH",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        })
        const result = await user11.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
};

userDocument();
