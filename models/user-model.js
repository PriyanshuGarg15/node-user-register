const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema= new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
    },
    dob:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{timestamps:true}); //will save timestamps also (created at and Updated at)

const User=mongoose.model('User',userSchema)
module.exports= User