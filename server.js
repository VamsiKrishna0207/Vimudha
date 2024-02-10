const express = require('express');
const mongoose = require('mongoose');

const Register=require('./Reg');
const app = express();
const cors=require('cors');

// Middleware (OR) bodyparser
app.use(express.json());
app.use(cors({
    origin:'*'
}))

// Local server and MongoDB connection using Mongoose
mongoose.connect('mongodb+srv://vamsi123:vamsi123@cluster0.js8ym2c.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("Database connected......!"))
    .catch(err => console.log(err));

    
// CRUD APPLICATION ::::::: GET POST DELETE UPDATE :::::::: ////////////



  // Register Crud Application 


  app.get("/clientdata",async(req,res)=>{
    
    try{
        const cu=await Register.find();
        return res.json(cu);
    }
    catch(err){
        console.log(massage.err);
    }
  })





  app.post("/register",async(req,res)=>{
    const {Name,Surname,Date,Gender,Nominee,Occupation,Age,Mobile,Address,Sq_feet} = req.body;

try{
    const newda=new Register({Name,Surname,Date,Gender,Nominee,Occupation,Age,Mobile,Address,Sq_feet});
    await newda.save();
    return res.json(await Register.find());
}
catch(err){
 System.out.println(err);
}

  })







// To run the server in a particular port by using app.listen function
app.listen(8090, () => console.log("Working"));
