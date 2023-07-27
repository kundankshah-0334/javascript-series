const fs = require('fs');
const http = require('http');

const server = http.createServer((req , res) =>{
    console.log(req.url);
    if(req.url == "/"){
        res.end('Hello from the another side');
    } else if(req.url == "/about"){
        res.end(' Hello from the About side');
    }  else if(req.url == "/contact"){
        res.end('Hello from the contact side');
    } else if(req.url == "/userapi"){
        fs.readFile(`api.json`,"utf-8" , (err , data) =>{
            console.log(data);
            res.end(data);
        });
    } 
    else{
        res.writeHead(404 , {"content-type" : "text/html"});
        
    }
});

server.listen(8000 , '127.0.0.1',()=>{
    console.log('server running on port numbr 8000');
});