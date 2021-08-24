const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const validator=require("validator");

const customerRegistration=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
});
//hashing
customerRegistration.pre("save",async function(next){
    // const passwordHash=await bcrypt.hash(password,10);
    if(this.isModified("password")){
        // console.log(`current password is ${this.password}`);
        this.password=await bcrypt.hash(this.password,10);
        // console.log(`current password is ${this.password}`);
        this.cpassword=undefined;
    }
    next();
})
const Customer=new mongoose.model("Customer",customerRegistration);
module.exports=Customer;
