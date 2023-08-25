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
        const result = await UserModel


        // .find({age:{
        //     $gt : 45
        // } })


        // .find({course:{
        //     $nin : ["c" , "python"]
        // } })


        // .find({
        //     $or : [{name: "Raju"}, {name: "Raja"}]
        // })


        // .find({
        //     $and : [{name: "Raju"}, {age: 12}]
        // })

        // .find({ age: { $not: { $gt: 12 } } } )


        // .find({course:{
        //     $in : ["c" , "python"]
        // } })


        // .find()
        // .select({name:1 ,_id:0})
        // .countDocuments();

        .find()
        .select({name:1 ,_id:0})
        // .countDocuments()
        .sort({"name" : -1});
        // .limit(1);
        console.log(result); 
    }catch(err){
        console.log(err);
    }
}


// getDocument();


const updateDocument = async (_id) => {
    try{
        const result = await UserModel.updateOne({ _id} , {
            $set : {
                name : "Girdhari"
            }
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

//old way to update document---
// const updateDocument = async (_id) => {
//     try{
//         const result = await UserModel.findByIdAndUpdate({ _id} , {
//             $set : {
//                 name : "Girdhari t  q"
//             }
//          } , {
//             new : true
//          });
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }



const deleteDocument = async (_id) => {
    try{
        const result = await UserModel.deleteOne({ _id});
        console.log(result);
    }catch(err){
        console.log(err);
    } 
}
// old wat to delete document
// const deleteDocumentold = async (_id) => {
//     try{
//         const result = await UserModel.findByIdAndDelete({ _id});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

 
// deleteDocumentold("64bed7f6749aad3d554e8147");
updateDocument("64bed7f6749aad3d554e8145");


