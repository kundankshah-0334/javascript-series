const http = require('http');

const server = http.createServer((req , res) =>{
    console.log(req.url);
    if(req.url == "/"){
        res.end('Hello from the another side');
    } else if(req.url == "/about"){
        res.end(' Hello from the About side');
    }  else if(req.url == "/contact"){
        res.end('Hello from the contact side');
    } else{
        res.writeHead(404 , {"content-type" : "text/html"});
        res.end(`<h1>Erro ! Page does'not exist</h1>`);
    }
});

server.listen(8000 , '127.0.0.1',()=>{
    console.log('server running on port numbr 8000');
});