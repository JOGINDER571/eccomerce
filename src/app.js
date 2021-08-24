const express=require("express");
const path=require("path");
const hbs=require("hbs");
const bcrypt=require("bcryptjs");
const app=express();
port=8000;
require("./db/conn");
const Customer=require("./models/schema");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//static path
const publicPath=path.join(__dirname,"../public");
app.use(express.static(publicPath));
// template path


const viewsPath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set("views",viewsPath);
hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{res.render("index")});
app.get("/product",(req,res)=>{
    res.render("product");
});
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/cart",(req,res)=>{
    res.render("cart");
});


//post
app.post("/register",async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.cpassword;
        if(password===cpassword){
            const createData=new Customer({
                username:req.body.username,
                email:req.body.email,
                phone:req.body.phone,
                password:password,
                cpassword:cpassword
            });
            //hashing
            const registered=await createData.save();
            res.status(201).render("login");
        }
        
    }catch(err){
        res.status(400).send(err);
    }
})
//post login
app.post("/login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const userEmail=await Customer.findOne({email:email});
        const isMatch=await bcrypt.compare(password,userEmail.password);
        console.log(isMatch);

        if(isMatch){
            res.status(201).render("index");
        }else{
            res.send("invalid login details");
        }
    }catch(err){
        res.status(400).send("invalid login details");
    }
    
})

app.get("/404",(req,res)=>{res.render("404")});

app.listen(port,()=>{console.log(`this server listening to the port no ${port}`)});