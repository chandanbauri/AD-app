const {jwtKey} = require('../keys/Keys');

exports.dashboard = (req , res ,next) =>{
    if(req.session.user){
    res.send('hello'+req.user.name);}
    else{
        res.status(401).send('you need to login first');
    }
}