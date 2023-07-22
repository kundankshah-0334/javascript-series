var express = require('express');
var app = express();

app.get("/" , (req , res) => {
    res.send("Express js Started");
});
app.get("/about" , (req , res) => {
    res.send("This is about page started");
});
app.get("/contact" , (req , res) => {
    res.send("This is contact page started");
});
app.get("/temp" , (req , res) => {
    res.send("This is temp page started");
});

app.listen(8000 , "127.0.0.1" , () => {
    console.log('server is running on 8000')
});