const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/UsersModel');
const jwtKey = "basijwiu16237,.12/'ssnsj";


module.exports = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(400).send(' please login first ');
    }
    //const token = authorization.replace("Bearer ","");
    const token = authorization;
    //console.log(token);
    jwt.verify(token, jwtKey, async (err, data) => {
        if (err) {
            return res.status(401).send({ error: "You have to login first" });
        }
        // const { userID } = data; //data is actually storing the userID property that i have attached for token at the time of signup
        // const user = await User.findById(userID);//searching if the user(userID) is exist into the Database or not 
        const { email } = data.userData;
        await User.findOne({ email })
            .then(response => {
                if (response) {
                    req.user = response;
                    console.log(response);
                    next();
                }
            })
            .catch(err => {
                res.send(err);
            })
    })


}