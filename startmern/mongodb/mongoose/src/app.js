const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mymongodb', {useNewUrlParser: true , useUnifiedTopology : true})
.then(()=>{
    console.log("Connected to datbase");
})
.catch((err) => {
    console.log(err);
});