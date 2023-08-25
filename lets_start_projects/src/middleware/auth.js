// require('dotenv').config();
const jwt = require("jsonwebtoken");
const Register = require("../models/registration");

const auth = async (req , res , next) => {
    try {
        const token = req.cookies.jwt;
        const userVerify = jwt.verify(token , process.env.SECURITY_KEY);
        console.log(userVerify);

        const user = await Register.findOne({_id:userVerify._id });
        console.log(user);

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = auth;