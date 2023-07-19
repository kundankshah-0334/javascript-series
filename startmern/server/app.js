const mongoose = require('mongoose');
const express = require('express');
const app  = express();
const PORT =3000;
const DB = 'mongodb+srv://kundanlal96580:Wer6SjeCyBT1U415@cluster0.7orc3b1.mongodb.net/myfirstdb?retryWrites=true&w=majority';

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("mongo connect sucessfully");
})
.catch((err)=>{
    console.log(`mongoDB is not connected${err}`)
})

const middleware = (req, res , next) => {
    console.log('this is middleware...');
    next();
}


app.get('/' , (req , res) =>{
    res.send('heloo from another stack');
});
app.get('/about',middleware , (req , res) =>{
    res.send('hey this is about..');
});
app.get('/contact' , (req , res) =>{
    res.send('hey this is contact..');
});
app.get('/signin' , (req , res) =>{
    res.send('hey this is signin..');
});
app.get('/signup' , (req , res) =>{
    res.send('hey this is signup..');
});

app.listen(PORT , () =>{
    console.log('server is running on 3000.');
});
 