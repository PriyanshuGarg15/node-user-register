const bcrypt=require('bcrypt')
const validator=require('validator')
const User=require('../models/user-model')
const saltRounds=12

const index=(req,res)=>{
    res.render("index")
}
const registerUser=(req,res)=>{
    console.log('inside post')
    try{
        let user=new User(req.body)
        if(fieldValidator(user)){
            user.password=hashpwd(user.password)
            user.save()
                .then((result)=>res.send("User created with Email as: "+result.email))
                .catch((err)=>{console.log(err)})
        }
        else{throw "Invalid Request"}
    }catch(err){
        return res.status(500).send(err)
    }
}

const allUser=(req,res)=>{
    User.find()
        .then((result)=>
            res.render('users',{users:result})
        )
        .catch((err)=>{console.log(err)})
}

const deleteUser=(req,res)=>{
    const id = req.params.id;
      User.findByIdAndDelete(id)
        .then(result => {
          res.json({ redirect: '/users' });
        })
        .catch(err => {
          console.log(err);
        });
    
    }

const hashpwd= (pwd)=>{
    const hash= bcrypt.hashSync(pwd, saltRounds)
        return hash;  
}

const fieldValidator=(user)=>{
        // if(!validator.isEmail(user.email)){
        //     return false;
        // }else if(!validator.isDate(user.dob)){
        //     return false;
        // }else if(!validator.isStrongPassword(user.password)){
        //     return false;
        // }else if((!validator.isDecimal(user.phone)) ||(!validator.isLength(user.phone,10,12))){
        //     return false;
        // }else 
            return true;
}
module.exports={registerUser,allUser,index,deleteUser}