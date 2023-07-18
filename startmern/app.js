const express = require('express');
const app  = express();

app.get('/' , (req , res) =>{
    res.send('heloo from another stack');
});
app.get('/about' , (req , res) =>{
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

app.listen(3000 , () =>{
    console.log('server is running on 3000.');
});

 