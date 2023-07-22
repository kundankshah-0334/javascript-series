var path = require('path');
var express = require('express');
var app = express();


// console.log(path.join(__dirname , "../public"));

const staticPath = path.join(__dirname , "../public");

app.use(express.static(staticPath));
app.get("/" , (req , res) => {
    res.send("Express js Started");
});
app.get("/about" , (req , res) => {
    res.send("This is about page started");
});

app.listen(8000 , "127.0.0.1" , () => {
    console.log('server is running on 8000')
});