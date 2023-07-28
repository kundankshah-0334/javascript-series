const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userregistration" , {
  
    useNewUrlParser : true ,
    useUnifiedTopology : true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.error(`Could not connect to database ${e}`);
});

