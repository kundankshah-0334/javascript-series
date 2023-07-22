 
const fs = require('fs');
const http = require('http');
var requests = require('requests');
const homeFile = fs.readFileSync('home.html', "utf-8");
const replaceVal = (tempVal , orgVal) =>{
    let temperature = tempVal.replace("{%tempval%}" , orgVal.main.temp);
     temperature = temperature.replace("{%tempmin%}" , orgVal.main.temp_min);
     temperature = temperature.replace("{%tempmax%}" , orgVal.main.temp_max);
     temperature = temperature.replace("{%location%}" , orgVal.name);
     temperature = temperature.replace("{%country%}" , orgVal.sys.country);
     temperature = temperature.replace("{%temperature%}" , orgVal.weather[0].main);
    return temperature;
}
const server = http.createServer((req , res) =>{
    console.log(req.url);
    if(req.url == "/"){
        requests(
            "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=f35114f7023e3395adcc23b8b9604d7b")
        .on("data", (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
        // console.log(arrData); 
        // console.log(arrData[0].main.temp); 
        const realTimeData = arrData.map((val) => replaceVal(homeFile , val)).join("");
        // })
        res.write(realTimeData);
        console.log(realTimeData);
        })
        .on("end",(err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
        console.log("end");
        });
    }
    else{
        res.writeHead(404 , {"content-type" : "text/html"});
        res.end(`<h1>Erro ! Page does'not exist</h1>`);
    }
});

server.listen(8000 , '127.0.0.1',()=>{
    console.log('server running on port numbr 8000');
});
