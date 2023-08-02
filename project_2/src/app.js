const express =  require("express");
const app = new express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const PORT = process.env.PORT || 8000 ;
const staticPath = path.join(__dirname ,"../public");
const templatePath = path.join(__dirname ,"../templates/views");
const partialPath = path.join(__dirname ,"../templates/partials");

app.use('/css' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")));
app.use('/js' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")));
app.use('/jq' , express.static(path.join(__dirname , "../node_modules/dist")));

// app.use(express.static(staticPath));

app.set('view engine' , "hbs");
app.set('views' ,templatePath );
hbs.registerPartials(partialPath);
// console.log();


app.get('/' , (req , res)=>{
   res.render('index');
});
app.get('/contact' , (req , res)=>{
   res.render('contact');
});
app.get('/about' , (req , res)=>{
   res.render('about');
});
app.get('/service' , (req , res)=>{
   res.render('service');
});
 

app.listen(PORT , "127.0.0.1" , () =>{
    console.log(`Server is running on port ${PORT}`)
});