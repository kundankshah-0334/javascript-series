const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/project_2" , {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useCreateIndex : true
}).then(()=>{
    console.log('Database connected successfully')  ;
}).then((error) => {
    console.log(error)
});