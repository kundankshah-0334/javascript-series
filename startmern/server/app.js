const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app  = express();
const PORT =process.env.PORT;

// dotenv.config({ path: '/config.env'});
dotenv.config({ path: './config.env' });

require('./db/conn.js');










// mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>{
//     console.log("mongo connect sucessfully");
// })
// .catch((err)=>{
//     console.log(`mongoDB is not connected${err}`)
// })

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
 