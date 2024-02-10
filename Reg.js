const mongoose=require('mongoose');

const Register=mongoose.Schema({
    Name :{
        type:String,
        require:true
    },
    Surname :{
        type:String,
        require:true
    },
    Date :{
        type:String,
        require:true
    },
    Gender :{
        type:String,
        require:true
    },
    Nominee :{
        type:String,
        require:true
    },
    Occupation :{
        type:String,
        require:true
    },
    Age :{
        type:String,
        require:true
    },
    Mobile :{
        type:String,
        require:true
    },
    Address :{
        type:String,
        require:true
    },
    Sq_feet :{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("register",Register);