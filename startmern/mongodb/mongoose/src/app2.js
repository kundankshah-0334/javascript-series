const mongoose = require('mongoose');

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
    age: Number,
    course: {
        type : String ,
        required :true ,
        enum : ["python","java","math"],
        lowercase: true
    },
    emailId : String,
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
            name:"asdfghjkliu",
            age: 78,
            course: "MatHg",
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
