require("./db/conn");
const express =  require("express");
const app = express();
const path =  require("path");
const hbs =  require("hbs");
const port = process.env.PORT || 8000;

const Register = require("./models/registration")

const static_path = path.join(__dirname , "../public");
const views_path = path.join(__dirname , "../template/views");
const partials_path = path.join(__dirname , "../template/partials");
 console.log(static_path);
 app.use(express.static(static_path));

 app.use(express.urlencoded({extended : false}));
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

app.post("/register" , async (req , res) => {
     try{
        const password = req.body.password ;
        const cpassword = req.body.confirm_password ;

        if(password == cpassword){
            const userRegister = new Register ({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                 password : password,
                 confirmpassword : cpassword
            });

            const registred = await userRegister.save();
            res.status(201).render("index");
        }else{
            res.send("Password doed not match.")
        }
        
     }catch(e) {
        res.status(400).send(e);
     }
});

app.listen(port  , () => {
    console.log(`Server running on http://localhost:${port}`);
});