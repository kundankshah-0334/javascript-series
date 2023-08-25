var path = require('path');
var express = require('express');
var hbs = require('hbs');
var requests = require('requests');
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
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=f35114f7023e3395adcc23b8b9604d7b`)
    .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
    // console.log(arrData); 
    var result = `<h1> City Name is ${arrData[0].name} and ${arrData[0].main.temp}</h1>`; 
    // const realTimeData = arrData.map((val) => replaceVal(homeFile , val)).join("");
    // })
    res.write(result);
    // console.log(realTimeData);
    })
    .on("end",(err) => {
    if (err) return console.log('connection closed due to errors', err);
    res.end();
    // console.log("end");
    });
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