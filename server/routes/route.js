const express = require('express')
const route = express.Router();


const {register,logIn, logout} = require('../Controllers/authentication.js')
const user= require("../Controllers/user.js");
const { Professionals,professional, professionalRegister } = require('../Controllers/professionals.js');
const { showInquiry, postInquiry } = require('../Controllers/inquiry.js');
const { reviews, postReview } = require('../Controllers/review.js');
const transaction = require("../Controllers/transaction.js");
const { profileUpdate, professioanlUpd, updatePassword } = require('../Controllers/update.js');

//AUTH ROUTES
route.post("/auth/signup",register);
route.post("/auth/login",logIn);
route.post("/auth/logout",logout)

//USER ROUTES
route.get("/user/:id",user);
route.put("/user-update", profileUpdate)
route.put("/update-pass",updatePassword)


//PROFESSIONALS ROUTES
route.get("/professional/:profession",Professionals)
route.get("/professional/:profession/:id",professional);
route.post("/register",professionalRegister);
route.put("/update-pro",professioanlUpd)

//INQUIRY ROUTES
route.get("/inquiry/:id",showInquiry);
route.post("/inquiry",postInquiry);

//REVIEW ROUTES
route.get("/reviews/:userId",reviews);
route.post("/review",postReview);

//TRANSACTION 
route.get("/transaction/:id",transaction)

module.exports = route;