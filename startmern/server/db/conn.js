
const mongoose = require('mongoose');
const DB = process.env.DATABASE; 
// console.log(DB);
mongoose.connect(DB , {
    useNewUrlParser: true,
 
    useUnifiedTopology: true,
    
  
}).then(()=>{
    console.log('Database is connected now.');
}).catch((err)=>{
    console.log('Something went wrong in establishing connection.');
});
