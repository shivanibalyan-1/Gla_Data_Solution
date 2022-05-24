const mongoose = require("mongoose");
// creating a database
mongoose.connect("mongodb://localhost:27017/GlaDataSolution",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:false
}).then(() =>{
    console.log("connection sucessfull");
}).catch((error) => {
    console.log(error);
})

