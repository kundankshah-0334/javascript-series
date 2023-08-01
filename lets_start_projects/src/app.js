require('dotenv').config();
require("./db/conn");
const express =  require("express");
const app = express();
const path =  require("path");
const hbs =  require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
console.log(process.env.SECURITY_KEY);
const port = process.env.PORT || 8000;
// const auth = require("./middleware/auth");


const Register = require("./models/registration");
const { read } = require("fs");
const static_path = path.join(__dirname , "../public");
const views_path = path.join(__dirname , "../template/views");
const partials_path = path.join(__dirname , "../template/partials");
 console.log(static_path);
 app.use(express.static(static_path));
 app.use(cookieparser());
 app.use(express.urlencoded({extended : false}));
 app.set("view engine" , "hbs"); 
 app.set("views" , views_path); 
 hbs.registerPartials(partials_path);

 const auth = require("./middleware/auth");

 
app.get("/home" , (req , res) => {
    // console.log( "Hello World!" );
    res.render("index");
});
app.get("/secret", auth ,(req , res) => {
    console.log( `the secre t page is ${req.cookies.jwt}` );
    res.render("secret");
});
app.get("/logout", auth , async (req , res) => {
   try {

    // for single logout
    
    // console.log(req.user);
    // req.user.tokens = req.user.tokens.filter((CurrToken) => {
    //     return CurrToken.token != req.token;
    // });
    res.clearCookie("jwt");

    console.log("Logout Succcessfully");

    await req.user.save();
    res.render("login");

   } catch (error) {
    res.status(400).send(error);
   }
});
app.get("/login" , (req , res) => {
    // console.log( "Hello World!" );2
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

            // console.log("the Succcess part " + userRegister);
           const token = await userRegister.generateAuthToken();
        //    console.log(token);

           res.cookie("jwt" , token , {
            expires : new Date(Date.now() + 60000),
            httpOnly : true
           });



            const registred = await userRegister.save();
            res.status(201).render("index");
        }else{
            res.send("Password does not match.")
        }
        
     }catch(e) {
     console.log("error");
        res.status(400).send(e);
     }
});

app.post("/login" , async (req , res) => {
     try{
         
         const email = req.body.email;
         const pass = req.body.pass;
        
         
         const userEmail = await Register.findOne({email});
        //  console.log(userEmail.password);
         
         const isMatchPassword = await bcrypt.compare(pass , userEmail.password);

         const token = await userEmail.generateAuthToken();
        //  console.log(token);
 

          res.cookie("jwt" , token , {
            expires : new Date(Date.now() + 60000),
            httpOnly : true
           });



        //  console.log(isMatchPassword);

        if(isMatchPassword){
            res.status(201).render("index");
        }else{
            res.send("Invalid Crendentials");
        }
       
     }catch(e) {
        res.status(400).send(e);
     }
});

// const bcrypt = require("bcryptjs");

// const securePassword = async (password) => {
//     const passwordHash = await bcrypt.hash(password ,10)
//     console.log(passwordHash);
// };

// const comparePassword = async (password) => {
//     const passwordHash = "$2a$10$TuDCSOVSPs8dywaa9kN8wOYHJ3CjJaY9238SOqMlZO6C5LDsbTvKi";
//     const result = await bcrypt.compare(password ,passwordHash)
//     console.log(result);
// };
// comparePassword("1hgd23");



// securePassword("1hgd23");

// const jwt = require("jsonwebtoken");

// const createToken = async () => {
//     const token =  await jwt.sign({id : "64c447cdc8913c7eee6e2d24" } , "dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd");
//     console.log(token);

//     const userVerify = await jwt.verify(token ,"dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd" );
//     console.log(userVerify);
// };

// createToken();

app.listen(port  , () => {
    console.log(`Server running on http://localhost:${port}`);
});