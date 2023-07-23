const mongoose = require("mongoose");
const DB = "mongodb+srv://kundanlal96580:Wer6SjeCyBT1U415@cluster0.7orc3b1.mongodb.net/davdb?retryWrites=true&w=majority"
mongoose.connect(DB)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => { console.log(`db not connected ${err}`) })


const studentSchema = mongoose.Schema({
    name: String,
    rollno: Number,
    standard: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

const Student = mongoose.model("Student", studentSchema);

const createDocument = async () => {
    try {
        const student2 = new Student({
            name: "Shubham",
            rollno: "21",
            standard: "BCA"
        })
        const student3 = new Student({
            name: "Mohan",
            rollno: "22",
            standard: "BCA"
        })
        const student4 = new Student({
            name: "Vikram Gupta  ",
            rollno: "23",
            standard: "BCA"
        })
        const student5 = new Student({
            name: "Sonu",
            rollno: "24",
            standard: "BCA"
        })
        const result = await Student.insertMany([student2,student3,student4,student5]);
        console.log(result)
    }
    catch(err){
        console.log(err);
    }
}
// createDocument();

//getData

const getDocument=async()=>{
    const result= await Student
    // .find({ rollno: { $lt: 30 } })
    // .find({ $and: [ { name: "Shubham" }, { rollno: 22 } ] })
    .find()
    .sort({name:-1})
    .countDocuments();
    console.log(result);
}
getDocument();






