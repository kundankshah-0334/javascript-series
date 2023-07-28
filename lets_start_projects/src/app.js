require("./db/conn");
const express =  require("express");
const app = express();
const path =  require("path");
const hbs =  require("hbs");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname , "../public");
const views_path = path.join(__dirname , "../template/views");
const partials_path = path.join(__dirname , "../template/partials");
 console.log(static_path);
 app.use(express.static(static_path));

 app.set("view engine" , "hbs"); 
 app.set("views" , views_path); 
 hbs.registerPartials(partials_path);
 
app.get("/home" , (req , res) => {
    // console.log( "Hello World!" );
    res.render("index");
});
app.get("/login" , (req , res) => {
    // console.log( "Hello World!" );
    res.render("login");
});
app.get("/register" , (req , res) => {
    // console.log( "Hello World!" );
    res.render("register");
});

app.listen(port  , () => {
    console.log(`Server running on http://localhost:${port}`);
});