const mongoose=require("mongoose");
const validator=require("validator");

mongoose.connect("mongodb://localhost:27017/registration-form",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log("db connection successfull..")
}).catch((err)=>{
    console.log(err);
});