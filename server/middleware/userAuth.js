const jwt = require('jsonwebtoken')
const user = require("../models/user.js")

const userAuth = async(req, res, next) => {

    const {token} = req.cookies;

    if(!token){
        return res.status(401).json({message : "Not Authorized, Login again"})
    }
    try{

        const tokenDecode =  jwt.verify(token, process.env.JWT_SECRET);
        
        if(tokenDecode){
            req.body.userId = tokenDecode.id
            req.body.role = user.role;
        }else{
            return res.status(401).json({message : "Not Authorized, Login again"})
        }
        next();

    }catch(error){
      res.status(401).json({message : error.message})
    }
}

module.exports = userAuth;