require("./db/conn");
const express =  require("express");
const app = express();
const path =  require("path");
const hbs =  require("hbs");
const port = process.env.PORT || 8000;

const Register = require("./models/registration");
const { read } = require("fs");

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

app.post("/login" , async (req , res) => {
     try{
         
         const email = req.body.email;
         const pass = req.body.pass;
        
        const userEmail = await Register.findOne({email});
        console.log(userEmail.password);

        if(userEmail.password === pass){
            res.status(201).render("index");
        }else{
            res.send("Invalid Crendentials");
        }
       
     }catch(e) {
        res.status(400).send(e);
     }
});

const bcrypt = require("bcryptjs");

const securePassword = async (password) => {
    const passwordHash = await bcrypt.hash(password ,10)
    console.log(passwordHash);
};

const comparePassword = async (password) => {
    const passwordHash = "$2a$10$TuDCSOVSPs8dywaa9kN8wOYHJ3CjJaY9238SOqMlZO6C5LDsbTvKi";
    const result = await bcrypt.compare(password ,passwordHash)
    console.log(result);
};
comparePassword("1hgd23");



securePassword("1hgd23");

app.listen(port  , () => {
    console.log(`Server running on http://localhost:${port}`);
});