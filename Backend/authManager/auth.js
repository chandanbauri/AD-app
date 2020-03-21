const mongoose = require('mongoose');
const UserSchema = require('./../models/UsersModel');
const User = mongoose.model('Users');
const jwt = require('jsonwebtoken');
const {jwtKey} = require('../keys/Keys')

exports.login = async (req, res, next) => {
    const user = {
        "email": req.body.email,
        "password": req.body.password
    }
    const {email} = req.body;
    console.log(req.body.email)
   var result = await User.findOne({email})
                .catch(err =>{
                    res.status(400).send(err);
                });
     console.log(result);
           if(result){
            console.log(result.email)

               if(user.password === result.password){
                   req.session.user  = result;
                   req.session.save();
                    const token = jwt.sign({userData : req.session.user},jwtKey);
                   res.status(200).json({token});
               }
               else{
                   res.status(400).send("password did not matched");
               }
           }else{
            res.status(400).send("user does not exist");

           }
        
    
}


exports.signUp = (req, res , next) =>{
       const {email , password , phoneNo , name } = req.body;
       try{
           const user = new UserSchema({email , password, phoneNo , name});
           user.save();
           res.status(200).send("user add successfully");
       }
       catch (error){

       res.status(400).send(error);

       }

}