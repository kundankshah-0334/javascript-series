var path = require('path');
var express = require('express');
var hbs = require('hbs');
var app = express();

const staticPath = path.join(__dirname , "../public");
const tmpPath = path.join(__dirname , "../template/views");
const regiPar = path.join(__dirname , "../template/particials");


app.set('view engine' , "hbs");
app.set('views' , tmpPath);
hbs.registerPartials(regiPar);

// app.use(express.static(staticPath));

app.get("/" , (req , res) => {
    res.render("index" , {
        user_name : "kundan",
    });
}); 
app.get("/about" , (req , res) => {
    res.render("about");
}); 
 
// app.get("/about/*" , (req , res) => {
//     res.render("404" , {
//         error : "This about page does not exists.",
//     });

// });
app.get("*" , (req , res) => {
    res.render("404" , {
        error : "This page does not exists.",
    });

});

app.listen(8000 , "127.0.0.1" , () => {
    console.log('server is running on 8000')
});