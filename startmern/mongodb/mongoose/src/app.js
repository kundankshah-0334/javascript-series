const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amongodb', {useNewUrlParser: true , useUnifiedTopology : true})
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
        const user11 = new UserModel({
            name:"Raja",
            age: 78,
            course: "python",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        })
        const user12 = new UserModel({
            name:"Mohan",
            age: 78,
            course: "python",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        })
        const user13 = new UserModel({
            name:"Prem",
            age: 78,
            course: "python",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        })
        const user14 = new UserModel({
            name:"Janak",
            age: 78,
            course: "python",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        })
        const user15 = new UserModel({
            name:"Karn",
            age: 78,
            course: "python",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        })
        const user16 = new UserModel({
            name:"Raju",
            age: 78,
            course: "python",
            emailId : "Raja123@gmail.com",
            city : "Patna",
            status:true,
        })
        
        const result = await UserModel.insertMany([user11,user12, user13, user14,user15, user16]);
        console.log(result);

    }catch(err){
        console.log(err);
    }
};

// userDocument();

const getDocument = async () =>{
    try{
        const result = await UserModel.find({course: "python"})
        .select({name:1 ,_id:0})
        .limit(1);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();
