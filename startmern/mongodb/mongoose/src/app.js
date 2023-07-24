const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mywrmongodb', {useNewUrlParser: true , useUnifiedTopology : true})
.then(()=>{
    console.log("Connected to database");
})
.catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    } ,
    age: Number,
    course: String,
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
        const user1 = new UserModel({
            name:"Raja",
            age: 78,
            course: "python",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        });
        
        const result = await user1.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
};

userDocument();

