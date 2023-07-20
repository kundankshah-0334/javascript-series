const chalk = require("chalk");

const validator = require("validator");

console.log(("Hello chalk"));

const valid = validator.isEmail('foo@bar.com');

console.log(valid ? chalk.green.inverse(valid) : chalk.red.inverse(valid));



// this code doesn't work . Giving error 


 