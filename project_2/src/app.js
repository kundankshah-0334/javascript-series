const express =  require("express");
const app = new express();
const path = require("path");
require("./db/conn");
const PORT = process.env.PORT || 8000 ;
const staticPath = path.join(__dirname ,"../public");

app.use('/css' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")));
app.use('/js' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")));
app.use('/jq' , express.static(path.join(__dirname , "../node_modules/dist")));

// app.use(express.static(staticPath));

app.set('view engine' , "hbs");
// console.log();


app.get('/' , (req , res)=>{

   res.render('index');

});
app.get('/about' , (req , res)=>{

   res.send('hello from about  server :)')

});

app.listen(PORT , "127.0.0.1" , () =>{
    console.log(`Server is running on port ${PORT}`)
});