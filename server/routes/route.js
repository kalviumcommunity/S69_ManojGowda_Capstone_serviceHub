const express = require('express')
const route = express.Router();
const userAuth = require('../middleware/userAuth.js')



const {register,logIn, logout, googleLogin} = require('../Controllers/authentication.js')
const user= require("../Controllers/user.js");
const { Professionals,professional, professionalRegister } = require('../Controllers/professionals.js');
const { showInquiry, postInquiry } = require('../Controllers/inquiry.js');
const { reviews, postReview } = require('../Controllers/review.js');
const transaction = require("../Controllers/transaction.js");   
const { profileUpdate, professionalUpd, updatePassword } = require('../Controllers/update.js');
const deleteUser = require("../Controllers/delete.js")

//AUTH ROUTES
route.post("/auth/signup",register);
route.post("/auth/login",logIn);
route.post("/auth/logout",logout)
route.post("/auth/google", googleLogin)

//USER ROUTES
route.get("/user",userAuth,user);
route.put("/user-update",userAuth, profileUpdate)
route.put("/update-pass",userAuth,updatePassword)
route.delete("/delete",userAuth,deleteUser)


//PROFESSIONALS ROUTES
route.get("/professionals/profession",userAuth,Professionals)
route.get("/professional",userAuth,professional);
route.post("/register",userAuth,professionalRegister);
route.put("/update-pro",userAuth,professionalUpd)

//INQUIRY ROUTES
route.get("/inquiry",userAuth,showInquiry);
route.post("/inquiry",userAuth,postInquiry);

//REVIEW ROUTES
route.get("/reviews",userAuth,reviews);
route.post("/review",userAuth,postReview);

//TRANSACTION 
route.get("/transaction",userAuth,transaction)

module.exports = route;